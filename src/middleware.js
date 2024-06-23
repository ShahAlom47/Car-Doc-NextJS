import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';


export function middleware(request) {
  const token = cookies(request).get('__Secure-next-auth.session-token');
  const pathName = request.nextUrl?.pathname;

  console.log('Token:', token); 
  console.log('Pathname:', pathName); 

  if (pathName.includes('api')) {
    return NextResponse.next();
  }

  if (!token) {
    console.log('Redirecting to login...');  
    return NextResponse.redirect(new URL(`/login?redirect=${pathName}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/my-bookings/:path*'],
};
