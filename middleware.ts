import { NextRequest, NextResponse } from "next/server";

let locales = ["vi", "en"];
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request;
  const url = request.nextUrl;

  if (
    nextUrl.pathname.startsWith("/_next/") ||
    nextUrl.pathname.startsWith(".") ||
    nextUrl.pathname.startsWith("/static/") ||
    nextUrl.pathname.startsWith("/service/") ||
    locales.some((locale) => {
      return nextUrl.pathname.startsWith(`/${locale}`);
    })
    // PUBLIC_FILE.test(request.nextUrl.pathname)
  ) {
    return;
  }

  const location = cookies.get("locale")?.value;

  const expires = new Date().getTime() + 1000 * 60 * 60 * 24 * 365;

  if (location && locales.includes(location)) {
    nextUrl.pathname = `/${location}${nextUrl.pathname}`;
    const response = NextResponse.rewrite(nextUrl);
    response.cookies.set("locale", location, { expires: expires });

    return response;
  } else {
    nextUrl.pathname = `/vi${nextUrl.pathname}`;
    const response = NextResponse.rewrite(nextUrl);
    response.cookies.set("locale", "vi", { expires: expires });

    return response;
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
