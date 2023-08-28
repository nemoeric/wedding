import Container from "@/components/Container"
import Section from "@/components/Section"
import Card from "@/components/daisyui/card"
import UserCard from "@/components/userCard"
import prisma from "@/prisma/prisma"

export default async function Page(){

  const users = await prisma.user.findMany({
    orderBy: {
      firstName: 'asc',
    },
    where: {
      saturdayWillAttend : true,
    },
    select : {
      id: true, 
      firstName: true, 
      lastName: true,
      saturdayWillAttend: true,
      image: true,
      slug: true,
      saturdayWillNeedTransport: true,
      saturdayPlateChoice: true,
      isChild: true,
    }
  })


  return (
    <Section>
      <Container>
        <div className="text-3xl font-serif">
          Saturday
        </div>
        <Card title="Attending">
          <div>
            {users.filter( user => !user.isChild).length} adults
          </div>
          <div className="">
            {users.filter( user => user.isChild).length} children
          </div>

        </Card>
        <div>
          {users.filter( user => user.saturdayWillAttend && user.saturdayPlateChoice != null ).length} ont choisi un plat
        </div>
        <ul>
          <li>{users.filter( user => user.saturdayPlateChoice == "Tuna" ).length} TUNA</li>
          <li>{users.filter( user => user.saturdayPlateChoice == "Angus" ).length} ANGUS</li>
          <li>{users.filter( user => user.saturdayPlateChoice == "Nasi" ).length} NASI</li>
        </ul>
        <div>
          {users.filter( user => !user.saturdayWillAttend).length} not coming
        </div>


        <Card title="Adults">
          <div className="grid grid-cols-2 gap-2">
            {users.filter(user=>!user.isChild).map( user => <UserCard user={user} key={user.id}/> )}
          </div>
        </Card>
        <Card title="Children">
          <div className="grid grid-cols-2 gap-2">
            {users.filter(user=>user.isChild).map( user => <UserCard user={user} key={user.id}/> )}
          </div>
        </Card>
      </Container>
    </Section>
  )
}