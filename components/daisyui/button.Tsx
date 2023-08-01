const Button = ({
  title,
  isPending = false,
  children,
}:{
  title: string,
  isPending: boolean,
  children?: React.ReactNode,
}) => {
  return (
    ( 
      <button className="btn btn-primary btn-block">
        {isPending && (
          <span className="loading loading-spinner"></span>
        )}
        {title}
      </button>
    )
  )
}

export default Button