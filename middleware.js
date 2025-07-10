import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

// Token verify helper
async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (err) {
    console.error('JWT verification failed:', err.message);
    return null;
  }
}

export async function middleware(req) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get('token')?.value;
 console.log(url+" aaaaaa")
  // Protected routes
  const isAdminRoute = url.pathname.startsWith('/dashboard/admin');
  const isUserRoute = url.pathname.startsWith('/dashboard/user');
  const isDashboard = url.pathname.startsWith('/dashboard');

  // No token: redirect to login
  if (!token && isDashboard) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // Verify token
  const user = await verifyToken(token);
  if (!user) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // Role-based restriction
  if (isAdminRoute && user.role !== 'ADMIN') {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (isUserRoute && user.role !== 'USER') {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

// Apply middleware only to dashboard pages
export const config = {
  matcher: ['/dashboard/:path*'],
};
