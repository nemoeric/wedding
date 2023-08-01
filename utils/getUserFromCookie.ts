const jwt = require('jsonwebtoken');
import { cookies } from 'next/headers'
import { getUserByID } from '@/prisma/user';


const getUserFromCookie = async () => {
  const cookie = cookies().get('accessToken')
  if(!cookie || !cookie.value) return null
  let accessToken = cookie?.value
  try {
    let decodedToken = jwt.verify(accessToken, process.env.JWT_SECRET);
    const user = await getUserByID(decodedToken?.userId)
    return user
  } catch (error) {
    console.log(error);    
    return null    
  }
}
export default getUserFromCookie