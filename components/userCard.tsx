import Image from "next/image"
import Card from "./daisyui/card"
import Link from "next/link"

const UserCard = ({ user, preview }:{
  user: any,
  preview?: boolean,
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
            className="rounded-full object-cover aspect-square"
          />
          <div>
            <div className="font-bold">
              {user.firstName} {user.lastName}
            </div>
            {!preview && (
              <div>
                {user.hasResponded ? (
                  "Vous avez répondu 🫶🏻"
                ):(
                  <span className="text-warning">{`Vous n'avez pas encore répondu !`}</span>
                )}
              </div>
            )}
          </div>
        </div>
        {!preview && (
          <div className="absolute right-4 bottom-4 text-xs italic underline">
            Accéder au profil
          </div>

        )}
      </Link>

    </Card>
  )
}
export default UserCard