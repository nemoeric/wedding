"use server";

import {findUserByEmail, updateUser, createUser, getUserByID} from '@/prisma/user'
import resend from '@/utils/resend';
import {
  MagicLink
} from '@/emails/magikLink';
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "@/utils/aws";
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'

var jwt = require('jsonwebtoken');

export const handleFormLogin = async (formData: FormData) => {

  const email = formData.get('email');
  const user = await findUserByEmail(email)

  if(user != null) {
    try {

      if(user.isAdmin){
        
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
          name: 'accessToken',
          value: accessToken,
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3), // 3 days
          // expires: new Date(Date.now() + 1000 * 60 * 5),
          httpOnly: true,
          path: '/',
        })
        revalidatePath('/')

        console.log("Admin connected");
        
        // Update user
        updateUser(
          user.id,
          {
            hasConnected: true
          }
        )
        return {
          error: false,
        }      
  

      }


      var token = jwt.sign(
        { 
          userId: user.id 
        }, 
        process.env.JWT_SECRET, {
          expiresIn: '1h'
        }
      );

      const data = await resend.emails.send({
        from: 'no-reply@nemo-stanton.fr',
        to: [
          user.email
        ],
        subject: 'Connexion à Nemo Stanton',
        react: MagicLink({ 
          firstName: user.firstName,
          url: process.env.NEXT_PUBLIC_URL + "/api/verify?token=" + token,
        }),
      });

      return {
        error: false,
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
    name: 'accessToken',
    value: '',
    expires: new Date('2016-10-05'),
    path: '/',
  })
  revalidatePath('/')
  return {
    error: false,
  }
}
export const handleFormRegister = async (formData: FormData) => {

  const email       = formData.get('email');
  const firstName   = formData.get('firstName');
  const lastName    = formData.get('lastName');

  const user = await createUser({
    email,
    firstName,
    lastName
  })

  return {
    error: false,
    user
  }

}
export const uploadImage = async (formData: FormData) => {

  const file          = formData.get('file') as File
  const userId        = formData.get('userId') as string
  const arrayBuffer   = await file.arrayBuffer()
  
  const params = {
    Bucket: "gondalier", // The name of the bucket. For example, 'sample-bucket-101'.
    Key: `wedding/${userId}.jpg`, // The name of the object. For example, 'sample_upload.txt'.
    Body: arrayBuffer, // The content of the object. For example, 'Hello world!".
    ACL:'public-read',
  };
  let user = await updateUser(
    userId, 
    {
      image: `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/wedding/${userId}.jpg`
    }
  )

  {/* @ts-expect-error Server Component */}
  let res = await s3Client.send(new PutObjectCommand(params));
  console.log("Successfully uploaded data to ");
  
  return {
    error: false,
    user
  }
}

export const testServerAction = async (formData: FormData) => {
  console.log("testServerAction");
  return {
    error: false,
  }
}

export const notifyUser = async (formData: FormData) => {
  
  const userId       = formData.get('userId');
  const user          = await getUserByID(userId)


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
      const data = await resend.emails.send({
        from: 'no-reply@nemo-stanton.fr',
        to: [
          user.email
        ],
        subject: 'Connexion à Nemo Stanton',
        react: MagicLink({ 
          firstName: user.firstName,
          url: process.env.NEXT_PUBLIC_URL + "/api/verify?token=" + token,
        }),
      });
      return {
        error: false,
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