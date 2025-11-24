// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  // Get the hostname (e.g., 'docs.domain.com' or 'localhost:3000')
  const hostname = request.headers.get('host');

  // Logic for production (replace 'domain.com' with your actual domain)
  const docsDomain = 'docs.domain.com';
  // Logic for development (replace 'localhost:3000' with your local address/port)
  const localDocs = 'docs.localhost:3000';

  if (hostname === docsDomain || hostname === localDocs) {
    // If accessing docs.domain.com, rewrite the path to start with /docs
    url.pathname = `/docs${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

// Define paths where middleware should run (exclude static assets)
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
