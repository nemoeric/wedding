import prisma from './prisma'

export const findUserByEmail = async (email) => {
  console.log('findUserByEmail', email);
  return await prisma.user.findUnique({
    where: {
      email
    }
  })
}
export const findUserById = async (id) => {
  console.log('findUserById', id);
  return await prisma.user.findUnique({
    where: {
      id
    }
  })
}