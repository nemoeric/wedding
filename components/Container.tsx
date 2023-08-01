"use client"
import { Fade } from "react-awesome-reveal";

const Container = ({ children }: {
  children: React.ReactNode
}) => {

  return (
    <div className="px-4 md:px-3 lg:px-4 md:py-10 max-w-screen-lg mx-auto ">
      {children}
    </div>
    
  )

}
export default Container