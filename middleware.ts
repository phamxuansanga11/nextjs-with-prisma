import { NextResponse } from "next/server";
import NextAuth from "next-auth";
import { publicRoutes, apiAuthPrefix, PATH_NAME } from "@/routes";

import authConfig from "@/auth.config";

const { auth } = NextAuth(authConfig);

// Or like this if you need to do something here.
export default auth((req) => {
  const isLogged = !!req.auth;

  const { pathname } = req.nextUrl;

  console.log("isLogged:", isLogged);
  const isAuthRoute = pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(pathname);

  if (isAuthRoute) {
    if (isLogged) {
      return NextResponse.redirect(
        new URL(PATH_NAME.DASHBOARD, req.nextUrl.origin)
      );
    } else {
      return NextResponse.next();
    }
  }

  if (!isPublicRoute) {
    if (!isLogged) {
      return NextResponse.redirect(
        new URL(PATH_NAME.LOGIN, req.nextUrl.origin)
      );
    }
  }
  return NextResponse.next();
});

// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
