const Card = ({
  title,
  children,
  className = ""
}:{
  title?: string,
  children: React.ReactNode,
  className?: string
}) => {
  return (
    (
      <div className={`card border border-grey w-full shadow-xl text-primary bg-white ${className}`}>
        <div className="card-body">
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