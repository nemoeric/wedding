"use client"

import {
  useState,
} from "react"
import {
  useRouter,
} from "next/navigation"

const Login = () => {
  "use client"
  const router = useRouter()
  const [email, setEmail] = useState(process.env.NEXT_PUBLIC_DEFAULT_EMAIL || "")

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
    <div className="px-2 md:px-10 py-10 max-w-screen-xl mx-auto">
      <div className="rounded-lg shadow-xl grid gap-6 p-6 border border-grey text-primary">
        
        <h2 className="font-serif text-3xl md:text-6xl">
          Confirmer votre présence
        </h2>
        <div>
          Merci d entrer votre email. Cela vous permettra {`d'éditer`} les données associées à votre profil.
        </div>
        <form onSubmit={handleFormSubmit} className="grid gap-2 md:grid-cols-5">

          <div className="form-control col-span-3">
            <input type="text" 
              placeholder="Email" 
              className="input input-bordered input-accent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}  
            />
          </div>
          <button className="btn btn-primary btn-block">
            Se connecter
          </button>


          
        </form>


      </div>
      
    </div>
  )
}
export default Login