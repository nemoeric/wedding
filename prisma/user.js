import prisma from './prisma'

export const getUserByEmail = async (email) => {
  console.log('getUserByEmail', email);
  return await prisma.user.findUnique({
    where: {
      email : email.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
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
export const getUsers = async (params={}) => {
  return await prisma.user.findMany(params)
}