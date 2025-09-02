import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const pathname = request.nextUrl.pathname;

  // Ignore static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Allow unauthenticated access to login and register
  if (!token && pathname !== "/login" && pathname !== "/register") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
