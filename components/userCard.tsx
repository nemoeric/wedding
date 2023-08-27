import Image from "next/image"
import Card from "./daisyui/card"
import Link from "next/link"

const UserCard = ({ user, preview }:{
  user: any,
  preview?: boolean,
}) => {
  return  (
    <Card className={" relative"}>
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
            { user.saturdayWillAttend && user.saturdayPlateChoice == null && (
              <div className="bg-warning rounded px-2">
                <span className="text-warning-content text-xs italic">Précisez votre plat pour samedi</span>
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