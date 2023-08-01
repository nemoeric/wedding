const Card = ({
  title,
  children,
}:{
  title: string,
  children: React.ReactNode,
}) => {
  return (
    (
      <div className="card w-96 bg-base-100 shadow-xl text-primary">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {children}
        </div>
      </div>
    )
  )
}

export default Card