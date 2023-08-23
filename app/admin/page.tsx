import Container        from "@/components/Container"
import NotifyUserCell   from "@/components/NotifyUserCell"
import Table            from "@/components/daisyui/Table"
import Card             from "@/components/daisyui/card"
import prisma           from "@/prisma/prisma"
import Image from "next/image"
import Link from "next/link"
import Modal from "@/components/daisyui/Modal"
import UserCard from "@/components/userCard"
import SmallUserCard from "@/components/smallUserCard"

const Users = async () => {

  const users = await prisma.user.findMany({
    orderBy: {
      firstName: 'asc',
    },
    include: {
      room: true,
    }
  })

  // filter on user without room
  const usersWithoutRoom = users.filter(user => user.roomId === null)

  const rooms = await prisma.room.findMany({
    orderBy: {
      name: 'asc',
    },
    select: {
      name: true,
      location: true,
      floor: true,
      users: {
        select: {
          firstName: true,
          lastName: true,
          image: true,
        }
      },

    }
  })

  return (
    <Container>

      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-serif mb-4">Welcome to the back office</h1>
      </div>


      <div className="grid gap-4">

        <div className="divider">Guests participation</div>
        <div className="grid md:grid-cols-3 gap-2">
          <Card title="Thursday">
            <div className="flex">
              <div>
                Adults : {users.filter(user => user.thursdayWillAttend && !user.isChild).length} attenting
              </div>
              <Modal callToAction={"view"} className="ml-2" id={"thurdsayAttending"}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {users.filter(user => user.thursdayWillAttend && !user.isChild).map((user:any, i:number) => {
                    return (<div key={i}>
                      <SmallUserCard user={user}/>
                    </div>)
                  })}

                </div>
              </Modal>
            </div>
            <div className="flex">
              <div>
                Children : {users.filter(user => user.thursdayWillAttend && user.isChild).length} attenting
              </div>
              <Modal callToAction={"view"} className="ml-2" id={"thurdsayAttendingChildren"}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {users.filter(user => user.thursdayWillAttend && user.isChild).map((user:any, i:number) => {
                    return (<div key={i}>
                      <SmallUserCard user={user}/>
                    </div>)
                  })}

                </div>
              </Modal>          
            </div>
            <div>
              Total : {users.filter(user => user.thursdayWillAttend).length} attenting
            </div>

            <div className="flex justify-end items-center">
              <div className="italic text-xs">
                Not coming : {users.filter(user => !user.thursdayWillAttend).length} people
              </div>
              <Modal callToAction={"view"} className="ml-2" id={"thurdsayNotAttending"}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {users.filter(user => !user.thursdayWillAttend).map((user:any, i:number) => {
                    return (<div key={i}>
                      <SmallUserCard user={user}/>
                    </div>)
                  })}

                </div>
              </Modal>          
            </div>

          </Card>

          <Card title="Friday">
            <div className="flex">
              <div>
                Adults : {users.filter(user => user.fridayWillAttend && !user.isChild).length} attenting
              </div>
              <Modal callToAction={"view"} className="ml-2" id={"fridayAttending"}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {users.filter(user => user.fridayWillAttend && !user.isChild).map((user:any, i:number) => {
                    return (<div key={i}>
                      <SmallUserCard user={user}/>
                    </div>)
                  })}

                </div>
              </Modal>
            </div>
            <div className="flex">
              <div>
                Children : {users.filter(user => user.fridayWillAttend && user.isChild).length} attenting
              </div>
              <Modal callToAction={"view"} className="ml-2" id={"fridayAttendingChildren"}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {users.filter(user => user.fridayWillAttend && user.isChild).map((user:any, i:number) => {
                    return (<div key={i}>
                      <SmallUserCard user={user}/>
                    </div>)
                  })}

                </div>
              </Modal>          
            </div>
            <div>
              Total : {users.filter(user => user.fridayWillAttend).length} attenting
            </div>
            <div className="flex justify-end items-center">
              <div className="italic text-xs">
                Not coming : {users.filter(user => !user.fridayWillAttend).length} people
              </div>
              <Modal callToAction={"view"} className="ml-2" id={"fridayNotAttending"}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {users.filter(user => !user.fridayWillAttend).map((user:any, i:number) => {
                    return (<div key={i}>
                      <SmallUserCard user={user}/>
                    </div>)
                  })}

                </div>
              </Modal>          
            </div>

          </Card>


          <Card title="Saturday">
            <div className="flex">
              <div>
                Adults : {users.filter(user => user.saturdayWillAttend && !user.isChild).length} attenting
              </div>
              <Modal callToAction={"view"} className="ml-2" id={"saturdayAttending"}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {users.filter(user => user.saturdayWillAttend && !user.isChild).map((user:any, i:number) => {
                    return (<div key={i}>
                      <SmallUserCard user={user}/>
                    </div>)
                  })}

                </div>
              </Modal>
            </div>
            <div className="flex">
              <div>
                Children : {users.filter(user => user.saturdayWillAttend && user.isChild).length} attenting
              </div>
              <Modal callToAction={"view"} className="ml-2" id={"saturdayAttendingChildren"}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {users.filter(user => user.saturdayWillAttend && user.isChild).map((user:any, i:number) => {
                    return (<div key={i}>
                      <SmallUserCard user={user}/>
                    </div>)
                  })}

                </div>
              </Modal>          
            </div>
            <div>
              Total : {users.filter(user => user.saturdayWillAttend).length} attenting
            </div>
            <div className="flex justify-end items-center">
              <div className="italic text-xs">
                Not coming : {users.filter(user => !user.saturdayWillAttend).length} people
              </div>
              <Modal callToAction={"view"} className="ml-2" id={"saturdayNotAttending"}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {users.filter(user => !user.saturdayWillAttend).map((user:any, i:number) => {
                    return (<div key={i}>
                      <SmallUserCard user={user}/>
                    </div>)
                  })}

                </div>
              </Modal>          
            </div>

          </Card>

        </div>
        <div className="divider">Transportation</div>
        <div className="grid md:grid-cols-3 gap-2">
          
          <Card title="Thursday">
            <div className="flex">
              <div>
               {users.filter(user => user.thursdayWillAttend && user.thursdayWillNeedTransport ).length} people
              </div>
              <Modal callToAction={"view"} className="ml-2" id={"thurdsayShuttle"}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {users.filter(user => user.thursdayWillAttend && user.thursdayWillNeedTransport ).map((user:any, i:number) => {
                    return (<div key={i}>
                      <SmallUserCard user={user}/>
                    </div>)
                  })}

                </div>
              </Modal>
            </div>

            <div className="flex justify-end items-center">
              <div className="italic text-xs">
                Coming on their own : {users.filter(user => user.thursdayWillAttend && !user.thursdayWillNeedTransport && user.roomId == null).length} people
              </div>
              <Modal callToAction={"view"} className="ml-2" id={"thurdsayNotShuttle"}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {users.filter(user => user.thursdayWillAttend && !user.thursdayWillNeedTransport && user.roomId == null ).map((user:any, i:number) => {
                    return (<div key={i}>
                      <SmallUserCard user={user}/>
                    </div>)
                  })}
                </div>
              </Modal>          
            </div>

            <div className="flex justify-end items-center">
              <div className="italic text-xs">
                Staying at QBV : {users.filter(user => user.roomId !== null).length} people
              </div>
              <Modal callToAction={"view"} className="ml-2" id={"thurdsayStaying"}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {users.filter(user => user.roomId !== null ).map((user:any, i:number) => {
                    return (<div key={i}>
                      <SmallUserCard user={user}/>
                    </div>)
                  })}
                </div>
              </Modal>          
            </div>

          </Card>

          <Card title="Friday">
            <div className="flex">
              <div>
               {users.filter(user => user.fridayWillAttend && user.fridayWillNeedTransport && user.roomId == null ).length} people
              </div>
              <Modal callToAction={"view"} className="ml-2" id={"fridayShuttle"}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {users.filter(user => user.fridayWillAttend && user.fridayWillNeedTransport ).map((user:any, i:number) => {
                    return (<div key={i}>
                      <SmallUserCard user={user}/>
                    </div>)
                  })}

                </div>
              </Modal>
            </div>

            <div className="flex justify-end items-center">
              <div className="italic text-xs">
                Coming on their own : {users.filter(user => user.fridayWillAttend && !user.fridayWillNeedTransport && user.roomId == null).length} people
              </div>
              <Modal callToAction={"view"} className="ml-2" id={"fridayNotShuttle"}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {users.filter(user => user.fridayWillAttend && !user.fridayWillNeedTransport && user.roomId == null ).map((user:any, i:number) => {
                    return (<div key={i}>
                      <SmallUserCard user={user}/>
                    </div>)
                  })}
                </div>
              </Modal>          
            </div>

            <div className="flex justify-end items-center">
              <div className="italic text-xs">
                Staying at QBV : {users.filter(user => user.roomId !== null).length} people
              </div>
              <Modal callToAction={"view"} className="ml-2" id={"fridayStaying"}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {users.filter(user => user.roomId !== null ).map((user:any, i:number) => {
                    return (<div key={i}>
                      <SmallUserCard user={user}/>
                    </div>)
                  })}
                </div>
              </Modal>          
            </div>

          </Card>

          <Card title="Saturday">
            <div className="flex">
              <div>
                From NH Hotel {users.filter(user => user.saturdayWillAttend && user.saturdayWillNeedTransport && user.roomId == null).length} people
              </div>
              <Modal callToAction={"view"} className="ml-2" id={"saturdayShuttle"}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {users.filter(user => user.saturdayWillAttend && user.saturdayWillNeedTransport && user.roomId == null).map((user:any, i:number) => {
                    return (<div key={i}>
                      <SmallUserCard user={user}/>
                    </div>)
                  })}

                </div>
              </Modal>
            </div>

            <div className="flex">
              <div className="">
                From QBV : {users.filter(user => user.saturdayWillAttend && user.roomId !== null).length} people
              </div>
              <Modal callToAction={"view"} className="ml-2" id={"saturdayStaying"}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {users.filter(user => user.saturdayWillAttend && user.roomId !== null).map((user:any, i:number) => {
                    return (<div key={i}>
                      <SmallUserCard user={user}/>
                    </div>)
                  })}
                </div>
              </Modal>          
            </div>

            <div className="flex justify-end items-center">
              <div className="italic text-xs">
                Coming on their own : {users.filter(user => user.saturdayWillAttend && !user.saturdayWillNeedTransport && user.roomId == null).length} people
              </div>
              <Modal callToAction={"view"} className="ml-2" id={"saturdayNotShuttle"}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {users.filter(user => user.saturdayWillAttend && !user.saturdayWillNeedTransport && user.roomId == null).map((user:any, i:number) => {
                    return (<div key={i}>
                      <SmallUserCard user={user}/>
                    </div>)
                  })}
                </div>
              </Modal>          
            </div>

           

          </Card>
          

        </div>         
        <div className="divider">Informations</div>
        <Card title="Food restrictions">
          <p>Keep an eye on foodrestrictions.</p>
          <Table
            headings={[
              'Guest', 
              'Food restrictions',
            ]}
            rows={users.filter(user=>user.hasFoodRestrictions).map((user:any) => {

              const avatarMarkup = (
                <Link href={`/users/${user.slug}`} key={user.id}>
                  <div className="flex items-center space-x-3" key={user.id}>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image src={user.image || "/placeholder_h.png"} width="50" height="50" className="rounded-full" key={user.id} alt={user.slug}/>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.firstName} {user.lastName}</div>
                      <div className="text-sm opacity-50">{user.email}</div>
                    </div>
                  </div>
                </Link>
              )
              

              return [
                avatarMarkup,
                user.foodRestrictions,
              ] 
            })}
            formats={['', '', '', '']}
          />
        </Card>


        <Card title="Engagment">
          <p>Review the guest list ({users.length}) and the engagment with the platform.</p>
          <Table
            headings={[
              'Guest', 
              'Invited',
              'Connected',
              'Responded',
            ]}
            rows={users.map((user:any) => {

              const avatarMarkup = (
                <Link href={`/users/${user.slug}`} key={user.id}>
                  <div className="flex items-center space-x-3" key={user.id}>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image src={user.image || "/placeholder_h.png"} width="50" height="50" className="rounded-full" key={user.id} alt={user.slug}/>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.firstName} {user.lastName}</div>
                      <div className="text-sm opacity-50">{user.email}</div>
                    </div>
                  </div>
                </Link>
              )
              const hasBeenInvitedMarkup =  user.hasBeenInvited ?
                (<input type="checkbox"  defaultChecked={user.hasBeenInvited}  disabled className="checkbox checkbox-success checkbox-sm" key={user.id}/>)
                :
                (<NotifyUserCell user={user} key={user.id}/>)

              return [
                avatarMarkup,
                hasBeenInvitedMarkup,
                <input type="checkbox"  defaultChecked={user.hasConnected}    disabled className="checkbox checkbox-success checkbox-sm" key={user.id}/>,
                <input type="checkbox"  defaultChecked={user.hasResponded}    disabled className="checkbox checkbox-success checkbox-sm" key={user.id}/>,
              ] 
            })}
            formats={['', '', '', '']}
          />

        </Card>

      </div>

      
    </Container>
  )
}
export default Users