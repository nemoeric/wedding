
const jwt = require('jsonwebtoken');
import Container from '@/components/Container';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function UserLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {

  const cookie = cookies().get('accessToken')
  if(!cookie || !cookie.value) return redirect("/login")

  
  let accessToken = cookie?.value
  try {
    let decodedToken = jwt.verify(accessToken, process.env.JWT_SECRET);
    if(!decodedToken?.isAdmin) return redirect("/")
  } catch (error) {
    return redirect("/")
  }

  

  return (
    <Container>
      {children}
    </Container>
  )
}