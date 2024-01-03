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
        <div className="grid gap-2">
          <Card title="Attending">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <div>
                  {users.filter( user => !user.isChild).length} adults
                </div>
                <div className="">
                  {users.filter( user => user.isChild).length} children
                </div>
              </div>
              <div>
                <div className="underline">Adults choices</div>
                <ul className="list-disc pl-2 text-xs">
                  <li>{users.filter( user => !user.isChild && user.saturdayPlateChoice == "Tuna" ).length} TUNA</li>
                  <li>{users.filter( user => !user.isChild && user.saturdayPlateChoice == "Angus" ).length} ANGUS</li>
                  <li>{users.filter( user => !user.isChild && user.saturdayPlateChoice == "Nasi" ).length} NASI</li>
                </ul>

              </div>
            </div>

          </Card>
          <Card title="Adults">
            <div className="grid md:grid-cols-2 gap-2">
              {users.filter(user=>!user.isChild).map( user => <UserCard user={user} key={user.id}/> )}
            </div>
          </Card>
          <Card title="Children">
            <div className="grid grid-cols-2 gap-2">
              {users.filter(user=>user.isChild).map( user => <UserCard user={user} key={user.id}/> )}
            </div>
          </Card>
        </div>

      </Container>
    </Section>
  )
}