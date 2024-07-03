import prisma from "@/lib/prisma";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: {
          label: "User Name",
          type: "text",
          placeholder: "type your username",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        let user = await prisma.user.findUnique({
          where: {
            email: credentials?.username,
          },
        });

        if (!user) throw new Error("User not found!");

        if (!credentials?.password)
          throw new Error("Please provide your password.");

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordCorrect)
          throw new Error("Username or password is not correct!");

        const { password, ...userWithoutPass } = user;

        return userWithoutPass;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user as User;
      return token;
    },

    async session({ token, session }) {
      session.user = token.user;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
