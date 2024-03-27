import NextAuth, { DefaultSession } from "next-auth";
import { UserRole } from "./user";

export type ExtendedUser = DefaultSession["user"] & {
  avatar: string;
  role: UserRole.ADMIN | UserRole.USER;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
