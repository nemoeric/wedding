import { NextResponse } from 'next/server'
// SIGN UP VERIFY TOKEN
export async function GET(request: Request) {
  return NextResponse.json({ message: "ok" })
}

