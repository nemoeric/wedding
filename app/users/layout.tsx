
import Container from '@/components/Container';
import getSessionUserFromCookie from '@/utils/getSessionUserFromCookie';
import { redirect } from 'next/navigation'

export default async function UserLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {

  let sessionUser = await getSessionUserFromCookie()

  if(!sessionUser) return redirect("/login")
  // if(!user.isAdmin)  return redirect("/")
  

  return (
    <Container>
      {children}
    </Container>
  )
}