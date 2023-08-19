import {getUserBySlug} from '@/prisma/user'
import Rsvp from '@/components/Rsvp'
import getSessionUserFromCookie from '@/utils/getSessionUserFromCookie'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import Card from '@/components/daisyui/card'
import prisma from '@/prisma/prisma'
const User = async ({
  params
}:{
  params: any
}) => {
  const sessionUser   = await getSessionUserFromCookie()
  const user          = await getUserBySlug(params.slug)

  if (!user) return redirect('/')

  const room = user?.roomId ? await prisma.room.findUnique({
    where: { id : user.roomId },
    include: {
      users: {
        select: {
          id: true,
          firstName: true, 
          image: true
        }
      }
    }
  }) : null

  console.log("room", room);
  

  return (
    <div className='grid gap-6'>
      {/* {sessionUser?.isAdmin && (
        <Card title='Photo'>
          <h1>{user?.firstName} {user?.lastName}</h1>
          <form action={uploadImage}>

            <div className="form-control w-full max-w-xs mb-2">
              <label className="label">
                <span className="label-text">Pick a file</span>
              </label>
              <input type="file" className="file-input file-input-bordered w-full max-w-xs"  name="file"/>
            </div>  
         
            <InputGroup
              hidden
              label='id'
              name='userId'
              type='text'
              defaultValue={user?.id}
            />
            <MyButton title="Save" />
          </form>
        </Card>
      )} */}

      <div className='flex justify-center items-center gap-3'>
        <Image
          src={user.image || "/placeholder_h.png"}
          alt={user.firstName || "jkjkej"}
          className="mask mask-hexagon-2 w-48 h-48 object-cover "
          width={300}
          height={300}
        />
        <div className='grow'>
          <h2 className="font-serif text-6xl">
            {user.firstName} {user.lastName}
          </h2>
          <div className="pb-6 italic">
            {user.email}
          </div>
        </div>

      </div>

      {room && (
        <Card title="Votre chambre" imageUrl={room.image ?? ""}>
          <div>
            Nous avons le plaisir de vous confirmez que vous dormirez parmi nous à Quinta da Bella Vista.
          </div>
          <div>
            À votre arrivée, présentez vous au Palace et cherchez Dinesh. Donnez lui {`les informations suivantes :`}
          </div>
          <div>
            Bâtiment : {room.location}
          </div>
          <div>
            Chambre : {room.name}
          </div>
          <div>
            Étage : {room.floor}
          </div>
          <div className='flex items-center justify-start gap-4'>
            <div>
              Vous dormirez avec : 
            </div> 
            {room.users.map(roomUser=>{
              return (
                <div className="avatar" key={roomUser.id}>
                  <div className="w-10 md:w-16 rounded">
                    <Image
                      src={roomUser.image || "/placeholder_h.png"}
                      alt={roomUser.firstName || "jkjkej"}
                      className="object-cover"
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
              )
            })}
          </div>
          <div className="divider"></div>
          <div className='text-xs italic'>
            Pour le paiement de votre chambre, vous pouvez effecturer un virement de 300€ pour les 2 nuits sur le rib FR76 1010 7001 7600 9270 4972 730
          </div>

        </Card>

      )}

      <Rsvp user={user} />
    </div>
  )
}
export default User;