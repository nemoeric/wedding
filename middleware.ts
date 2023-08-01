import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {

  // if (request.nextUrl.pathname.startsWith('/users')) {

  //   let cookie = request.cookies.get('accessToken')
  //   console.log("userId", cookie?.value) 

  //   if (!cookie) return NextResponse.redirect(new URL('/login', request.url))
    
  //   return NextResponse.next()

  // }
}