import { NextResponse } from 'next/server'
import {
  updateUser,
} from '@/prisma/user'

import { revalidatePath } from 'next/cache'

export async function GET(request: Request, { params }: {
  params: { slug: string }
}) {
  // console.log("GET REQUEST FOR", params.slug, "RECEIVED");
  // const member = await getMemberBySlug(params.slug)
  // return NextResponse.json({ member })
}

export async function PUT(request: Request, { params }: {
  params: { id: string }
}) {
  console.log("PUT REQUEST RECEIVED FOR", params.id );
  const payload = await request.json();

  console.log("PAYLOAD", payload);
  
  const user = await updateUser(params.id, payload)
  return NextResponse.json({ user })
}
