import { NextResponse } from 'next/server'
import {
  findUserById,
} from '@/prisma/user'
var jwt = require('jsonwebtoken');
import { cookies } from 'next/headers'

export async function GET(request: Request) {

  const { searchParams } = new URL(request.url)
  const token = searchParams.get('token')
  console.log('token', token);

  // if token doesn't exist, return error
  if(token == null) return NextResponse.json({ error: "Error loging in" })

  // Otherwise, verify token
  try {
    var decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log("DECODED IS", decodedToken);

    const user = await findUserById(decodedToken.userId)
    console.log('user ici', user)


    if(user != null) {

      cookies().set({
        name: 'uuid',
        value: user.id,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3), // 3 days
        httpOnly: true,
        path: '/',
      })

      // Send user to dashboard
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/`)
    }

  } catch (error) {
    // Change response code to 401
    console.log("error", error)

    return NextResponse.json({ error })
  }

  return NextResponse.json({ message: "ok" })
}
