import { NextResponse, type NextRequest } from "next/server";

// Routes are case-sensitive, so /cs2340 would be a 404. Send any other casing
// to the real page. (A next.config redirect can't do this: its matching is
// case-insensitive, so a rule for /cs2340 also matches /CS2340 and loops.)
export function proxy(request: NextRequest) {
  const match = request.nextUrl.pathname.match(/^\/(cs2340)(\/.*)?$/i);
  if (match && match[1] !== "CS2340") {
    const url = request.nextUrl.clone();
    url.pathname = `/CS2340${match[2] ?? ""}`;
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/cs2340/:path*", "/Cs2340/:path*", "/cS2340/:path*", "/CS2340/:path*"],
};
