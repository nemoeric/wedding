
const jwt = require('jsonwebtoken');
import Container from '@/components/Container';
import getUserFromCookie from '@/utils/getUserFromCookie';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const user = await getUserFromCookie()  
  if(user) return redirect("/users/" + user.slug)

  return (
    <Container>
      {children}
    </Container>
  )
}