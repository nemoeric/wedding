import Container from '@/components/Container';
import Section from '@/components/Section';
import getSessionUserFromCookie from '@/utils/getSessionUserFromCookie';
import { redirect } from 'next/navigation'

export default async function UserLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {

  let sessionUser = await getSessionUserFromCookie()
  if(!sessionUser) return redirect("/login")

  return (
    <Section>
      <Container>
        {children}
      </Container>
    </Section>
  )
}