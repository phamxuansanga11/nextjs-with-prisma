import Facebook from "next-auth/providers/facebook";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import type { NextAuthConfig } from "next-auth";
import { getUserByEmail } from "./services/getUserByEmail";
import { cookies } from "next/headers";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials;

        const user = await getUserByEmail(email as string);

        if (!user || !user.password) {
          return null;
        }

        const passwordMatch = await bcrypt.compare(
          password as string,
          user.password
        );

        if (passwordMatch) {
          cookies().set("accessToken", "my-access-token-123", {
            httpOnly: true,
            secure: true,
          });
          return {
            email: user.email,
            name: user.name,
            avatar: user.avatar,
            role: user.role,
          };
        }

        return null;
      },
    }),
    GitHub,
    Google,
    Facebook,
  ],
} satisfies NextAuthConfig;
