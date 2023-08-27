
import { getUserBySlug } from '@/prisma/user';
import getSessionUserFromCookie from '@/utils/getSessionUserFromCookie';
import Section from '@/components/Section';
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Menu from './MenuClient';




export default async function UserLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: any
}) {

  let sessionUser   = await getSessionUserFromCookie()
  const user        = await getUserBySlug(params.slug)


  const content = (
    <Section>
      <div className='md:flex justify-center items-center gap-3'>
        <Image
          src={user?.image || "/placeholder_h.png"}
          alt={user?.firstName || "jkjkej"}
          className="mask mask-hexagon-2 w-48 h-48 object-cover "
          width={300}
          height={300}
        />
        <div className='grow'>
          <div>
            <h2 className="font-serif text-3xl">
              {user?.firstName} {user?.lastName}
            </h2>
            <div className="pb-1 italic">
              {user?.email}
            </div>
          </div>
          <Menu slug={params.slug} showRoom={user?.roomId ? true : false}/>
        </div>
      </div>
      {children}
    </Section>
  )

  if(sessionUser?.isAdmin)        return content
  if(sessionUser?.id == user?.id) return content

  let result = sessionUser?.canEdit.filter( (canEditUser:any) => canEditUser.id == user?.id)
  if(result?.length) return content
  

  return redirect("/")
}