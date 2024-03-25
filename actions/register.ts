"use server";

import { db } from "@/lib/db";
import { CreateUserData } from "@/types/user";

export const createUser = async (data: CreateUserData) => {
  console.log("data in server:", data);
  const { email, fullName } = data;
  if (!email || !fullName) {
    return { error: "email and fullName can not be null!" };
  }

  const userExists = await db.user.findUnique({
    where: {
      email: email,
    },
  });

  if (userExists) {
    return { error: "email is exists!" };
  }

  try {
    const newUser = await db.user.create({ data: data });
    return {
      success: "create user success!",
      user: newUser,
    };
  } catch (error) {
    return { error: "Some thing wrong!" };
  }
};
