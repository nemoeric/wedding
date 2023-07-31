import { PrismaClient } from '@prisma/client'
import slugify          from 'slugify'
let prisma

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

prisma.$use(async (params, next) => {
  if( 
    (params.action === 'create') 
    && 
    ['User'].includes(params.model)
  ) {
    console.log("Server middleware prisma.js", params);
    let {
      args:{
        data
      }
    } = params;
    // Check if slug exists by `findUnique` (did not test)
    data.slug = slugify(`${data.lastName} ${data.firstName}`, {lower: true, strict: true, remove: /[*+~.()'"!:@]/g});
    data.email = data.email.toLowerCase();
  }
  const result = await next(params)
  return result
})
export default prisma