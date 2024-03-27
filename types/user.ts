export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}
export interface UserData {
  id: number;
  email: string;
  name: string;
  password?: string;
  avatar?: string;
  role: UserRole.ADMIN | UserRole.USER;
}
