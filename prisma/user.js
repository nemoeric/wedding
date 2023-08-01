import prisma from './prisma'

export const findUserByEmail = async (email) => {
  console.log('findUserByEmail', email);
  return await prisma.user.findUnique({
    where: {
      email : email.toLowerCase()
    }
  })
}
export const getUserByID = async (id) => {
  console.log('getUserByID', id);
  return await prisma.user.findUnique({
    where: {
      id
    },
    include: {
      canEdit: true
    }
  })
}
export const getUserBySlug = async (slug) => {
  console.log('getUserBySlug', slug);
  return await prisma.user.findUnique({
    where: {
      slug
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
export const createUser = async (data) => {
  return await prisma.user.create({
    data
  })
}
export const getUsers = async () => {
  return await prisma.user.findMany()
}