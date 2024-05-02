export const PATH_NAME = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  HOME: "/",
  DASHBOARD: "/dashboard",
  UPLOAD_FORM: "/upload-form",
};

export const publicRoutes = [PATH_NAME.HOME];

export const authRoutes = [
  PATH_NAME.LOGIN,
  PATH_NAME.REGISTER,
  PATH_NAME.UPLOAD_FORM,
];

export const apiAuthPrefix = "/auth";
