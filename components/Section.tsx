const Section = ({ children }: {
  children: React.ReactNode
}) => {

  return (
    <div className="py-4 bg-white text-primary">
      {children}
    </div>
    
  )

}
export default Section