
import Container from '@/components/Container';
import getSessionUserFromCookie from '@/utils/getSessionUserFromCookie';
import { redirect } from 'next/navigation'

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const user = await getSessionUserFromCookie()  
  if(user) return redirect("/users/" + user.slug)

  return (
    <div className='bg-slate-200'>
      <Container>
        {children}
      </Container>
    </div>

  )
}