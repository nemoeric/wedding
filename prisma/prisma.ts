import { PrismaClient } from '@prisma/client'
import slugify          from 'slugify'
let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  // @ts-ignore
  if (!global.prisma) {
      // @ts-ignore
    global.prisma = new PrismaClient()
  }
  // @ts-ignore
  prisma = global.prisma
}

prisma.$use(async (params, next) => {
  // @ts-ignore
  if(  (params.action === 'create') && ['User'].includes(params.model) ) {
    console.log("Server middleware prisma.js", params);
    let { args:{data} } = params;
    // Check if slug exists by `findUnique` (did not test)
    data.slug = slugify(`${data.lastName} ${data.firstName}`, {lower: true, strict: true, remove: /[*+~.()'"!:@]/g});
    data.email = data.email.toLowerCase();
  }
  // @ts-ignore
  if (params.action === 'update' && ['User'].includes(params.model)) {
    console.log("Server middleware prisma.js", params);
    const now = new Date().toISOString();
    const { data } = params.args;
    data.updatedAt = now;
  }


  const result = await next(params)
  return result
})
export default prisma