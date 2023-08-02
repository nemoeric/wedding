const Card = ({
  title,
  children,
  className = "",
}:{
  title?: string,
  children: React.ReactNode,
  className?: string
}) => {
  return (
    (
      <div className={`card border border-grey w-full shadow-xl text-primary bg-white ${className} relative`}>
        <div className="card-body p-4">
          {title &&
          <h2 className="card-title">{title}</h2>
          }
          {children}
        </div>
      </div>
    )
  )
}

export default Card