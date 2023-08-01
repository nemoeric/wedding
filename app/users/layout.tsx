
const jwt = require('jsonwebtoken');
import Container from '@/components/Container';
import { cookies } from 'next/headers'


export default function UserLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {

  const cookie = cookies().get('accessToken')
  if(!cookie || !cookie.value) return <Container>Not Authorized</Container>
  
  let accessToken = cookie?.value
  let decodedToken = jwt.verify(accessToken, process.env.JWT_SECRET);
  if(!decodedToken?.isAdmin) return <Container>Not Authorized</Container>

  

  return (
    <Container>
      {children}
    </Container>
  )
}