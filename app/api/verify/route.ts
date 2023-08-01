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
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await getUserByID(decodedToken.userId)


    if(user != null) {

      var accessToken = jwt.sign({ 
        userId: user.id ,
        isAdmin: user.isAdmin
      }, process.env.JWT_SECRET, {expiresIn: '1h'});
      cookies().set({
        name: 'accessToken',
        value: accessToken,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3), // 3 days
        // expires: new Date(Date.now() + 1000 * 60 * 5),
        httpOnly: true,
        path: '/',
      })
      await updateUser(user.id,{hasConnected: true})
      revalidatePath('/')

      // Send user to dashboard
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/`)
    }

  } catch (error) {
    console.log("error", error)
    return NextResponse.json({ error })
    
    // redirect to login
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/login?error=`)

  }

  return NextResponse.json({ message: "ok" })
}
