"use client"

import Container from "@/components/Container"
import Login from "@/components/Login"
const Rsvp = ({
  searchParams
}:{
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {  

  let expired = searchParams?.expired === "true" ? true : false

  return (
    <div className="h-[600px] flex justify-center items-center text-primary">
      <Container>
        <Login expired={expired}/>
      </Container>

    </div>
  )
}
export default Rsvp