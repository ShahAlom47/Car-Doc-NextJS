import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';


export function middleware(request) {
  const token = cookies(request).get('__Secure-next-auth.session-token');
  const pathName = request.nextUrl?.pathname;



  if (pathName.includes('api')) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL(`/login?redirect=${pathName}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/my-bookings/:path*'],
};
