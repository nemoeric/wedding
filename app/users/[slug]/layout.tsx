
import { getUserBySlug } from '@/prisma/user';
import getSessionUserFromCookie from '@/utils/getSessionUserFromCookie';
import Section from '@/components/Section';
import { redirect } from 'next/navigation'

export default async function UserLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: any
}) {

  let sessionUser   = await getSessionUserFromCookie()
  const user        = await getUserBySlug(params.slug)

  if(sessionUser?.isAdmin)        return <Section>{children}</Section>
  if(sessionUser?.id == user?.id) return <Section>{children}</Section>

  let result = sessionUser?.canEdit.filter( (canEditUser:any) => canEditUser.id == user?.id)
  
  if(result?.length) return <Section>{children}</Section>
  

  return redirect("/")
}