
import getSessionUserFromCookie from '@/utils/getSessionUserFromCookie';
import Section from '@/components/Section';
import { redirect } from 'next/navigation'

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  let sessionUser   = await getSessionUserFromCookie()
  if(sessionUser?.isAdmin) return <Section>{children}</Section>
  return redirect("/")
  
  
}