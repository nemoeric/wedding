import Section from '@/components/Section';
import Card from '@/components/daisyui/card';
import { getUserBySlug } from '@/prisma/user';
import getSessionUserFromCookie from '@/utils/getSessionUserFromCookie';
import { redirect } from 'next/navigation';
import prisma from '@/prisma/prisma'
import Image from 'next/image'

const Page = async ({
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
          image: true,
        }
      }
    }
  }) : null
  
  if(!room) return redirect(`/users/${params.slug}`)


  return (
    <Section>
      <Card title="Votre chambre" imageUrl={room.image ?? "https://a0.muscache.com/im/pictures/miso/Hosting-731060451412011457/original/5fb1edb7-a04c-4f2c-acbc-b334279ec7bf.jpeg?im_w=1200"}>
        <div>
          Nous avons le plaisir de vous confirmez que vous dormirez parmi nous à Quinta da Bella Vista.
        </div>
        <div>
          À votre arrivée, présentez vous au Palace et cherchez Dinesh. Donnez lui {`les informations suivantes :`}
        </div>
        <div>
          <span className='underline'>Bâtiment</span> : {room.location}
        </div>
        <div>
          <span className='underline'>Chambre</span> : {room.name}
        </div>
        <div>
          <span className='underline'>Étage</span> : {room.floor}
        </div>
        <div className='flex items-center justify-start gap-4'>
          <div>
            Vous dormirez avec : 
          </div> 
          {room.users.filter(roomUser=> roomUser.id != user.id ).map(roomUser=>{
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

        {room.isPaid ? (
          <div className='text-xs italic'>
            Merci, nous avons bien reçu le paiement pour votre chambre.
          </div>
        ):(
          <div className='text-xs italic'>
          Pour le paiement de votre chambre, vous pouvez effecturer un virement de 300€ pour les 2 nuits sur le rib FR76 1010 7001 7600 9270 4972 730
        </div>
        )}


      </Card>

    </Section>
  )
}
export default Page