const Card = ({
  title,
  children,
}:{
  title?: string,
  children: React.ReactNode,
}) => {
  return (
    (
      <div className="card w-full bg-base-100 shadow-xl text-primary">
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