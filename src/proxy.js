import { auth } from '@/lib/auth';

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/api/:path*'],
};

export const proxy = auth((req) => {
  if (req.auth && req.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/dashboard', req.url));
  }

  if (!req.auth && !req.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/login', req.url));
  }

  if (!req.auth && req.nextUrl.pathname.startsWith('/api')) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }
});
