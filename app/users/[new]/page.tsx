
import { cookies } from 'next/headers'
var jwt = require('jsonwebtoken');

import RegisterForm from './registerForm'

const NewUser = () => {

  const cookie = cookies().get('accessToken')
  let accessToken = cookie?.value
  let decodedToken = jwt.verify(accessToken, process.env.JWT_SECRET);
  if(!decodedToken?.isAdmin) return <div>Not Authorized</div>
  

  return (
    <div className='bg-white'>
      <div className=' max-w-lg mx-auto py-20'>
        <RegisterForm/>
      </div>
    </div>
  )
}
export default NewUser;