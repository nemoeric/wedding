import {getUserBySlug} from '@/prisma/user'


const User = async ({
  params
}:{
  params: any
}) => {

  const user = await getUserBySlug(params.slug)

  return (
    <>
      <h1>{user.firstName} {user.lastName}</h1>
    </>
  )
}
export default User;