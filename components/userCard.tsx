import Image from "next/image"
import Card from "./daisyui/card"
import Link from "next/link"

const UserCard = ({ user }:{
  user: any
}) => {
  let borderColor = user.hasResponded ? "border-green-400" : "border-warning"
  return  (
    <Card className={borderColor + " relative"}>
      <Link href={`/users/${user.slug}`}>
        <div className="flex gap-4 items-center">
          <Image
            width={90}
            height={90}
            src={user.image || '/placeholder_h.png'}
            alt="Eric & Elizabeth"
            className="rounded-full"
          />
          <div>
            <div className="font-bold">
              {user.firstName} {user.lastName}
            </div>
            <div>
              {user.hasResponded ? (
                "Vous avez répondu 🫶🏻"
              ):(
                <span className="text-warning">{`Vous n'avez pas encore répondu !`}</span>
              )}
            </div>
          </div>
        </div>
      </Link>

    </Card>
  )
}
export default UserCard