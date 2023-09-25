import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// without a defined matcher, this one line
// applies next-auth to the entire project
export { default } from "next-auth/middleware"

async function middleware1(request: NextRequest) {
    const url = request.url;
    console.log('middleware 1 =>', { url });

    return NextResponse.next();
}

async function middleware2(request: NextRequest) {
    const pathname = request.nextUrl;
    console.log('middleware 2 =>', { pathname });

    return NextResponse.next();
}

export async function middleware(request: NextRequest) {
    await middleware1(request);
    await middleware2(request);
}

// applies next-auth only to matching routes - can be regex
export const config = {
    matcher: ["/my-tasks", "/((?!api|_next|_vercel|.*\\..*).*)"]
}