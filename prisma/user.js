import prisma from './prisma'

export const findUserByEmail = async (email) => {
  console.log('findUserByEmail', email);
  return await prisma.user.findUnique({
    where: {
      email : email.toLowerCase()
    }
  })
}
export const findUserById = async (id) => {
  console.log('findUserById', id);
  return await prisma.user.findUnique({
    where: {
      id
    },
    include: {
      canEdit: true
    }
  })
}
export const updateUser = async (id, data) => {
  return await prisma.user.update({
    where: {
      id
    },
    data
  })
}