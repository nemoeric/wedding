const jwt = require('jsonwebtoken');

import { cookies } from 'next/headers'
const isAccessTokenAdmin = () => {
  const cookie = cookies().get('accessToken')
  if(!cookie || !cookie.value) return false
  let accessToken = cookie?.value

  try {
    let decodedToken = jwt.verify(accessToken, process.env.JWT_SECRET);
    return decodedToken?.isAdmin
  } catch (error) {
    return false    
  }
}
export default isAccessTokenAdmin