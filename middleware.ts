import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const authRoutes: string[] = ["/auth/login", "/auth/register"];
const privateRoutes: string[] = ["/dashboard", "/"];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // const isLogged: boolean = true;
  // const { nextUrl } = request;

  // if (nextUrl.pathname == "/" && isLogged) {
  //   return NextResponse.redirect(new URL("/home", request.url));
  // }

  // if (
  //   privateRoutes.some((route) => route.startsWith(nextUrl.pathname)) &&
  //   !isLogged
  // ) {
  //   return NextResponse.redirect(new URL("/auth/login", request.url));
  // }

  // if (
  //   authRoutes.some((route) => route.startsWith(nextUrl.pathname)) &&
  //   isLogged
  // ) {
  //   return NextResponse.redirect(new URL("/dashboard", request.url));
  // }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
