import Image from "next/image"
import Card from "./daisyui/card"
import Link from "next/link"

const SmallUserCard = ({ user }:{
  user: any,
}) => {
  return  (
    <Card className={" relative"}>
      <Link href={`/users/${user.slug}`}>
        <div className="flex gap-4 items-center">
          <Image
            width={50}
            height={50}
            src={user.image || '/placeholder_h.png'}
            alt="Eric & Elizabeth"
            className="rounded-full object-cover aspect-square"
          />
          <div className="">
            <div>
              {user.firstName} {user.lastName}
            </div>
          </div>
        </div>
      </Link>

    </Card>
  )
}
export default SmallUserCard