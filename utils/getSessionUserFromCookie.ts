import { getUserByID } from '@/prisma/user';
import { cookies } from 'next/headers'
var jwt = require('jsonwebtoken');


const getSessionUserFromCookie = async () => {

  let user = null
  let cookie = cookies().get("accessToken")
  
  if(!cookie || !cookie.value) return user
  let accessToken = cookie?.value
  try {
    let decodedToken  = jwt.verify(accessToken, process.env.JWT_SECRET);
    const user        = await getUserByID(decodedToken?.userId)
    return user
  }catch (error) {
    return user
  }
  
}
export default getSessionUserFromCookie