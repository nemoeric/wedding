import { NextResponse } from 'next/server'
import {
  getUserByID,
  updateUser
} from '@/prisma/user'
var jwt = require('jsonwebtoken');
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'

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

    const user = await getUserByID(decodedToken.userId)
    console.log('user ici', user)


    if(user != null) {

      var accessToken = jwt.sign(
        { 
          userId: user.id ,
          isAdmin: user.isAdmin
        }, 
        process.env.JWT_SECRET, {
          expiresIn: '1h'
        }
      );
      cookies().set({
        name: 'uuid',
        value: user.id,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3), // 3 days
        httpOnly: true,
        path: '/',
      })
      cookies().set({
        name: 'accessToken',
        value: accessToken,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3), // 3 days
        // expires: new Date(Date.now() + 1000 * 60 * 5),
        httpOnly: true,
        path: '/',
      })
      revalidatePath('/')

      updateUser(
        user.id,
        {
          hasConnected: true
        }
      )

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
