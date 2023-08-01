
const jwt = require('jsonwebtoken');
import { cookies } from 'next/headers'


export default function UserLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {

  const cookie = cookies().get('accessToken')
  if(!cookie || !cookie.value) return <div>Not Authorized</div>
  
  let accessToken = cookie?.value
  let decodedToken = jwt.verify(accessToken, process.env.JWT_SECRET);
  if(!decodedToken?.isAdmin) return <div>Not Authorized</div>

  

  return (
    <>
      {children}
    </>
  )
}