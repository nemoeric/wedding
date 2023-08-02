import { NextResponse } from 'next/server'
import {
  updateUser,
} from '@/prisma/user'

import resend from '@/utils/resend';
import {
  ConfirmResponse
} from '@/emails/confirmResponse';


export async function GET(request: Request, { params }: {
  params: { slug: string }
}) {
  // console.log("GET REQUEST FOR", params.slug, "RECEIVED");
  // const member = await getMemberBySlug(params.slug)
  // return NextResponse.json({ member })
}

export async function PUT(request: Request, {params}:{
  params: { id: string }
}) {
  const payload   = await request.json();
  const user      = await updateUser(params.id, {
    ...payload,
    hasResponded: true
  })

  const data = await resend.emails.send({
      from: process.env.RESEND_FROM as string,
      cc: [
        // "eric@kercambre.com",
        // "elizastanton@gmail.com"
      ],
      to: [
        user.email
      ],
      subject: 'RSVP - Votre réponse a bien été prise en compte',
      react: ConfirmResponse({user}),
  });


  return NextResponse.json({ user })
}
