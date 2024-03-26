import Facebook from "next-auth/providers/facebook";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import type { NextAuthConfig } from "next-auth";
import { getUserByEmail } from "./services/getUserByEmail";

export default {
  providers: [
    Credentials({
      async authorize(credentials, request) {
        const { email, password } = credentials;
        console.log("credentials:", credentials);

        const user = await getUserByEmail(email as string);

        console.log("user:", user);

        if (!user || !user.password) {
          return null;
        }

        const passwordMatch = await bcrypt.compare(
          `${password}`,
          `${user.password}`
        );

        console.log("passwordMatch:", passwordMatch);

        if (passwordMatch) {
          return user as any;
        }

        return null;
      },
    }),
    GitHub,
    Google,
    Facebook,
  ],
} satisfies NextAuthConfig;
