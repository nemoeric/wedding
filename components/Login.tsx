"use client"
import {handleFormLogin} from "@/utils/serverAction"
const Login = () => {
  return (
    <div className="px-4 md:px-10 py-10 max-w-screen-xl mx-auto">
      <div className="rounded-lg shadow-xl grid gap-6 p-6 border border-grey text-primary">
        
        <h2 className="font-serif text-3xl md:text-6xl">
          Espace invité
        </h2>
        <div>
          Saisissez votre email pour recevoir votre lien de connexion sécurisé.
        </div>

        <form action={async (formData:FormData)=>{
          let response = await handleFormLogin(formData);
          console.log("response", response);
          
        }} className="grid gap-2 md:grid-cols-5">
          <div className="form-control col-span-3">
            <input 
              type="text" 
              name="email"
              placeholder="Email" 
              className="input input-bordered input-accent"
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