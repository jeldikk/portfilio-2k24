import { fetchAuthSession } from "aws-amplify/auth/server";
import { NextRequest, NextResponse } from "next/server";
import { runWithAmplifyServerContext } from "./utils/amplify.server";
import { isAuthenticated } from "./services/auth";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const authenticated = await isAuthenticated();

  if (request.nextUrl.pathname === "/auth/login") {
    if (authenticated) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (request.nextUrl.pathname === "/admin/dashboard") {
    if (!authenticated) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  //   if (authenticated) {
  //     if (request.nextUrl.pathname === "/auth/login") {
  //       return NextResponse.redirect(new URL("/", request.url));
  //     }
  //   }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sign-in).*)",
  ],
};
