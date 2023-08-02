"use client"
const Container = ({ children, small }: {
  children: React.ReactNode
  small?: boolean
}) => {

  let className = "px-4 md:px-3 lg:px-4 max-w-screen-lg mx-auto"
  if(small) className += " max-w-screen-sm"
  return (
    <div className={className}>
      {children}
    </div>

  )

}
export default Container