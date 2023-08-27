import prisma  from '@/prisma/prisma'
import resend from '@/libs/resend';
import { NextResponse } from 'next/server';
import { NeedConfirmation} from '@/emails/saturday/NeedConfirmation';
var jwt = require('jsonwebtoken');

export async function GET(request: Request, { params }: {
  params: { slug: string }
}) {

  let user = await prisma.user.findUnique({
    where: {slug : params.slug}
  })

  if(user){
    const token   = jwt.sign({userId: user.id}, process.env.JWT_SECRET, {expiresIn: '7d'});
    const url     = process.env.NEXT_PUBLIC_URL + "/api/auth/verify?token=" + token

    
    let data = await resend.emails.send({
      from: process.env.RESEND_FROM as string,
      to: [user.email],
      bcc: ["hello@nemo-stanton.fr"],
      subject: 'Samedi - Mariage Nemo & Stanton',
      react: NeedConfirmation({
        user,
        url
      })
    });

    return NextResponse.json({ data })

  }

}
