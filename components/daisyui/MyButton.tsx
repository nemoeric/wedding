"use client"

const Button = ({
  title,
  isPending = false,
  children,
  className = "",
}:{
  title: string,
  isPending?: boolean,
  children?: React.ReactNode,
  className?: string
}) => {
  return (
    ( 
      <button className={`btn btn-primary btn-block ${className} btn-block`}>
        {isPending && (
          <span className="loading loading-spinner"></span>
        )}
        {title} 
      </button>
    )
  )
}

export default Button