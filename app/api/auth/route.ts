import { NextResponse } from 'next/server'
import {
  getUserByID,
} from '@/prisma/user'
var jwt = require('jsonwebtoken');

export async function GET(request: Request) {
  console.log("GET /AUTH", request.headers);

  let user = null

  return NextResponse.json({ user })


}

// GET USER FROM API BASED ON JWT COOKIE
export async function POST(request: Request) {
  console.log("POST VERIFY RECEIVED", request.headers);
  let user = null
  return NextResponse.json({ user })
}
