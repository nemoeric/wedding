"use client"
import { Fade } from "react-awesome-reveal";

const Container = ({ children }: {
  children: React.ReactNode
}) => {

  return (
    <div className="md:py-10 max-w-screen-lg mx-auto ">
      {children}
    </div>
    
  )

}
export default Container