import Section from '@/components/Section';
import getSessionUserFromCookie from '@/utils/getSessionUserFromCookie'
import { redirect } from 'next/navigation'

const AdminLayout = async ({ children }:{
  children: React.ReactNode
}) => {
  let sessionUser = await getSessionUserFromCookie()
  if(!sessionUser)          return redirect("/")
  if(!sessionUser.isAdmin)  return redirect("/")
  return <Section>{children}</Section>
};
export default AdminLayout