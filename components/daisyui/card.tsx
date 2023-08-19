import Image from "next/image"
const Card = ({
  title,
  children,
  className = "",
  imageUrl = ""
}:{
  title?: string,
  children: React.ReactNode,
  className?: string
  imageUrl?: string
}) => {
  return (
    (
      <div className={`card border border-grey w-full shadow-xl text-primary bg-white ${className} relative overflow-x-auto`}>

        {imageUrl &&(
          <figure>
            <Image
              src={imageUrl}
              alt="Quinta da Boa Vista Palace"
              width={2000}
              height={2000}
              className="aspect-[6/2]	 object-cover"
            />
          </figure>
        )}
        <div className="card-body p-4">
          {title &&
          <h2 className="card-title font-serif text-3xl">{title}</h2>
          }
          {children}
        </div>
      </div>
    )
  )
}

export default Card