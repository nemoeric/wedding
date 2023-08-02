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
  let cookie = request.headers
  return NextResponse.json({ user })





  
  if(!cookie || !cookie.value) return NextResponse.json({ user })
  let accessToken = cookie?.value
  try {
    let decodedToken  = jwt.verify(accessToken, process.env.JWT_SECRET);
    const user        = await getUserByID(decodedToken?.userId)
    return NextResponse.json({ user })
  } catch (error) {
    return NextResponse.json({ user })    
  }
}
