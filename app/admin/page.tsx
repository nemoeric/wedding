import Container        from "@/components/Container"
import NotifyUserCell   from "@/components/NotifyUserCell"
import Table            from "@/components/daisyui/Table"
import Card             from "@/components/daisyui/card"
import prisma           from "@/prisma/prisma"
import Image from "next/image"
import Link from "next/link"

const Users = async () => {

  const users = await prisma.user.findMany({
    orderBy: {
      firstName: 'asc',
    },
  })
  

  return (
    <Container>

      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-serif mb-4">Welcome to the back office</h1>

        <Link href={"/users/new"}>
          <button className="btn btn-primary btn-sm">
            Add guest
          </button>
        </Link>

      </div>
      <div className="grid gap-4">

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

      </div>

      
    </Container>
  )
}
export default Users