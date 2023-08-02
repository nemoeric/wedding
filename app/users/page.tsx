import Table from '@/components/daisyui/Table'
import Card from '@/components/daisyui/card'
import {getUsers} from '@/prisma/user'
import Image from 'next/image'
import Link from 'next/link'
import NotifyUserCell from './NotifyUserCell'
import getSessionUserFromCookie from '@/utils/getSessionUserFromCookie'
import { redirect } from 'next/navigation'

const Users = async () => {

  let sessionUser = await getSessionUserFromCookie()
  if(!sessionUser.isAdmin) return redirect("/")

  const users = await getUsers({
    orderBy: {
      firstName: 'asc',
    },
  })
  return (
    <div>
      <h1>Users</h1>
      <Table
        headings={[
          'First Name', 
          'Last Name', 
          'Email',
          'Invited',
          'Connected',
          'Responded',
        ]}
        rows={users.map((user:any) => {
          return [
            user.firstName,
            user.lastName,
            user.email,
            user.hasBeenInvited ?
            <input type="checkbox"  defaultChecked={user.hasBeenInvited}  disabled className="checkbox checkbox-success checkbox-sm" key={user.id}/>
            :
            <NotifyUserCell user={user} key={user.id}/>,

            <input type="checkbox"  defaultChecked={user.hasConnected}    disabled className="checkbox checkbox-success checkbox-sm" key={user.id}/>,
            <input type="checkbox"  defaultChecked={user.hasResponded}    disabled className="checkbox checkbox-success checkbox-sm" key={user.id}/>,
          ] 
        })}
        formats={['', '', '', '', '']}
      />
      <ul className='grid md:grid-cols-3 lg:grid-cols-3 gap-5 mt-10'>
        {users.map((user:any) => (
          <li key={user.id}>
            <Link href={`/users/${user.slug}`}>
              <Card>
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
                  <div className=' col-span-2'>
                    <div>
                    {user.firstName} {user.lastName}
                    </div>
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