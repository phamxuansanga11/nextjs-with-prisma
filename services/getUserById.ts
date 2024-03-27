import { db } from "@/lib/db";

export const getUserById = async (id: number) => {
  const user = await db.user.findUnique({
    where: {
      id: id,
    },
  });
  if (!user) {
    return null;
  }
  return user;
};
