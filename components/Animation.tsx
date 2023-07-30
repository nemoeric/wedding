"use client"
import { Fade } from "react-awesome-reveal";

const Animation = ({ children }: {
  children: React.ReactNode
}) => {

  return (
    <Fade cascade={true} triggerOnce>
      {children}
    </Fade>
    
  )

}
export default Animation