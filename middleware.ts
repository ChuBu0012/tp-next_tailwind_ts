import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Hello Middleware");
  console.log(request.url);
  console.log(request.nextUrl.pathname.startsWith("/api/"));

  if (Math.floor(Math.random() * 20 + 1) % 2 === 0) {
    const url = new URL(request.url);
    url.pathname = "/api/";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*", "/home/:path*"], // ['path','path']
};
