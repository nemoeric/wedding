
import { getUserBySlug } from '@/prisma/user';
import getSessionUserFromCookie from '@/utils/getSessionUserFromCookie';
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

  if(sessionUser.isAdmin) return <>{children}</>
  if(sessionUser.id == user.id) return <>{children}</>

  let result = sessionUser.canEdit.filter( (canEditUser:any) => canEditUser.id == user.id)
  console.log(result);
  
  if(result.length) return <>{children}</>
  

  return redirect("/")
}