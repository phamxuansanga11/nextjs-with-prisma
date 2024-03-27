"use server";

import { db } from "@/lib/db";
import { getUserByEmail } from "@/services/getUserByEmail";
import { UserData } from "@/types/user";
import bcrypt from "bcrypt";

export const createUser = async (data: UserData) => {
  console.log("data in server:", data);
  const { email, name, password } = data;
  if (!email || !name || !password) {
    return { error: "email, password and name can not be null!" };
  }

  const userExists = await getUserByEmail(email);

  if (userExists) {
    return { error: "email is exists!" };
  }

  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await db.user.create({
      data: {
        ...data,
        password: hashPassword,
      },
    });
    return {
      success: "create user success!",
      user: newUser,
    };
  } catch (error) {
    return { error: "Some thing wrong!" };
  }
};

export const deleteUser = async (id: number) => {
  await db.user.delete({ where: { id: id } });
};
