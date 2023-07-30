import { NextResponse } from 'next/server'
import {
  findUserByEmail,
} from '@/prisma/user'
var jwt = require('jsonwebtoken');

export async function POST(request: Request) {

  const { email } = await request.json()
  console.log('email', email);

  const user = await findUserByEmail(email)
  console.log('user', user);
  
  if(user != null) {
    try {
      var token = jwt.sign(
        { 
          userId: user.id 
        }, 
        process.env.JWT_SECRET, {
          expiresIn: '1h'
        }
      );
      console.log("TOKEN IS", token);


      // SEND EMAIL


      // REDIRECT TO VERIFY
      //return NextResponse.redirect(`/api/verify?token=${token}`)

      return NextResponse.json({ 
        url: "/api/verify?token=" + token,
      })


    } catch (error) {
      return NextResponse.json({ error: "Error loging in" })

    }
    
  }
  
  return NextResponse.json({ message: "ok" })
}
