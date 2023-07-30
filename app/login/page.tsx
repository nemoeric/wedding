"use client"

import {
  useState,
} from "react"
import {
  useRouter,
} from "next/navigation"

const Rsvp = () => {
  const router = useRouter()
  const [email, setEmail] = useState("eric.nemo123@gmail.com")

  const handleFormSubmit = async (e:any) => {
    e.preventDefault()
    console.log("email", email)
    let response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
    let data = await response.json()
    console.log("data", data)

    // REDIRECT TO URL FOR VERIFICATION TOKEN
    router.push(data.url)
  }
  return (
    <div className="h-screen bg-secondary flex justify-center items-center text-primary">
      <div>
        <h1 className=" text-7xl font-serif">
          RSVP
        </h1>
        <div>
          {/* INPUT YOUR EMAIL */}
          <form onSubmit={handleFormSubmit}>
            <input type="text" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}  
            />
          </form>
        </div>

      </div>
    </div>
  )
}
export default Rsvp