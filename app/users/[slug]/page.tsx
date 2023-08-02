import {getUserBySlug} from '@/prisma/user'
import Rsvp from '@/components/Rsvp'
import InputGroup from '@/components/daisyui/inputGroup'
import Card from '@/components/daisyui/card'
import {uploadImage} from '@/utils/serverActions'
import MyButton from "@/components/daisyui/MyButton"

const User = async ({
  params
}:{
  params: any
}) => {

  const user = await getUserBySlug(params.slug)
  return (
    <div className='grid gap-6'>
      {user?.isAdmin && (
        <Card title='Photo'>
          <h1>{user?.firstName} {user?.lastName}</h1>
          <form action={uploadImage}>
            <InputGroup
              label='Image'
              name='file'
              type='file'
            />
            <InputGroup
              hidden
              label='id'
              name='userId'
              type='text'
              defaultValue={user?.id}
            />
            <MyButton title="Save" />
          </form>
        </Card>
      )}

      <Rsvp user={user} />
    </div>
  )
}
export default User;