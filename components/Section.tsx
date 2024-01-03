const Section = ({ children, bgColor }: {
  bgColor?: string,
  children: React.ReactNode
}) => {

  let bg = bgColor ? bgColor : "bg-white" 
  
  return (
    <div className={`py-4 ${bg} text-primary`}>
      {children}
    </div>
    
  )

}
export default Section