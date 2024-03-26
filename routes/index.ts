export const PATH_NAME = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  HOME: "/",
  DASHBOARD: "/dashboard",
};

export const publicRoutes = [PATH_NAME.HOME];

export const authRoutes = [PATH_NAME.LOGIN, PATH_NAME.REGISTER];

export const apiAuthPrefix = "/auth";
