import prisma from "@/lib/prisma";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const { handlers, signIn, signOut, auth } = NextAuth({
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
});
