"use server";

import { User } from "@prisma/client";
import prisma from "../prisma";
import { hash } from "bcrypt";

export async function registerUser(
  user: Omit<User, "id" | "emailVerified" | "image">
) {
  const response = await prisma.user.create({
    data: { ...user, password: await hash(user.password, 10) },
  });
}
