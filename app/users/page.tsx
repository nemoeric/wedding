import Table from '@/components/daisyui/Table'
import Card from '@/components/daisyui/card'
import {getUsers} from '@/prisma/user'
import Image from 'next/image'
import Link from 'next/link'
import NotifyUserCell from '../../components/NotifyUserCell'
import getSessionUserFromCookie from '@/utils/getSessionUserFromCookie'
import { redirect } from 'next/navigation'

const Users = async () => {

  let sessionUser = await getSessionUserFromCookie()
  if(!sessionUser?.isAdmin) return redirect("/")

  const users = await getUsers({
    orderBy: {
      firstName: 'asc',
    },
    include: {
      canEdit: true,
    }
  })
  return (
    <div>
      <h1 className='font-serif text-4xl text-center'>Invités</h1>
      <ul className='grid md:grid-cols-3 lg:grid-cols-3 gap-5 mt-10'>
        {users.map((user:any) => (
          <li key={user.id}>
            <Link href={`/users/${user.slug}`}>
              <Card className='grayscale'>
                <div className='grid grid-cols-3 gap-2 justify-center items-center'>
                  <div className=' col-span-1'>
                    <Image
                      src={user.image || '/placeholder_h.png'}
                      alt={user.firstName}
                      width={100}
                      height={100}
                      className='mask mask-hexagon mask-cover'
                    />
                  </div>
                  <div className='col-span-2'>
                    <div className=''>
                      {user.firstName} {user.lastName}
                    </div>
                    {user.canEdit?.map( (canEditUser:any, i:any) =>  {
                      return <Image
                        src={canEditUser.image || '/placeholder_h.png'}
                        alt={canEditUser.firstName}
                        width={30}
                        height={30}
                        className='mask mask-hexagon mask-cover mt-2'
                        key={i}
                      />
                    })}
                  </div>
                 

                </div>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Users