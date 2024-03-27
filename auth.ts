// import { auth } from '@/auth';
import authConfig from "@/auth.config";
import { db } from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { getUserByEmail } from "./services/getUserByEmail";
import { UserRole } from "./types/user";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async session({ token, session }) {
      if (token.email) {
        const user = await getUserByEmail(token.email);
        if (user) {
          session.user.role = user.role as UserRole.ADMIN | UserRole.USER;
          session.user.avatar = user.avatar as string;
        }
      }
      return session;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
