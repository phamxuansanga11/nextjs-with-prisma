"use server";

import { signIn } from "@/auth";
import { getUserByEmail } from "@/services/getUserByEmail";
import { UserData } from "@/types/user";
import { AuthError } from "next-auth";

export const login = async (data: UserData) => {
  const { email, password } = data;
  if (!email || !password) {
    return { error: "email, password and fullName can not be null!" };
  }

  const user = await getUserByEmail(email);

  if (!user) {
    return { error: "user is not exists!" };
  }

  try {
    console.log("signIn....");
    await signIn("credentials", {
      email: user.email,
      password: password,
      redirectTo: "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };

        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
};
