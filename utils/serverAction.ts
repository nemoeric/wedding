"use server";

import {EmailTemplate} from '@/components/EmailTemplates';
import {findUserByEmail} from '@/prisma/user'
import resend from '@/utils/resend';

import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'


var jwt = require('jsonwebtoken');

export const handleFormLogin = async (formData: FormData) => {
  "use server"
  console.log("Server action: handleFormLogin");

  const email = formData.get('email');
  const user = await findUserByEmail(email)
  console.log('Server action : ', user);
  
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
      // const data = await resend.emails.send({
      //   from: 'no-reply@nemo-stanton.fr',
      //   to: [
      //     user.email
      //   ],
      //   subject: 'Connexion à Nemo Stanton',
      //   react: EmailTemplate({ 
      //     firstName: user.firstName,
      //     url: process.env.NEXT_PUBLIC_URL + "/api/verify?token=" + token,
      //   }),
      // });

      cookies().set({
        name: 'uuid',
        value: user.id,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3), // 3 days
        httpOnly: true,
        path: '/',
      })
      revalidatePath('/')

      return {
        error: false,
        // data
      }      
  



    } catch (error) {
      return {
        error: true,
        errorMessage: error
      }  
    }
  }
  
  return {
    error: true,
    errorMessage: "L'adresse email n'est pas reconnue"
  }

}
export const logout = async () => {
  cookies().set({
    name: 'uuid',
    value: '',
    expires: new Date('2016-10-05'),
    path: '/',
  })
  revalidatePath('/')
  return {
    error: false,
  }
}