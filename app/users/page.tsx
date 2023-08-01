import {getUsers} from '@/prisma/user'
import Link from 'next/link'

const Users = async () => {
  const users = await getUsers()
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user:any) => (
          <li key={user.id}>
            <Link href={`/users/${user.slug}`}>
              {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Users