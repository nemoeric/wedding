"use client"
import {handleFormLogin} from "@/utils/serverActions"
import {useState, useTransition} from "react"
import Button from "@/components/daisyui/button"
const Login = () => {

  const [showError, setShowError] = useState(false)
  const errorMessage = showError && (
    <div className="text-sm text-error">{`L'email n'existe pas. Demandez votre email à Eric.`}</div>
  );

  const [showSuccess, setShowSuccess] = useState(false)
  const successMessage = showSuccess && (
    <div className="text-sm text-success">{`Veuillez consulter votre boite email pour vous connecter.`}</div>
  )

  let [isPending, startTransition] = useTransition()

  return (
    <div className="px-4 md:px-4 py-10 max-w-screen-lg mx-auto">
      <div className="rounded-lg shadow-xl grid gap-6 p-6 border border-grey text-primary">
        <h2 className="font-serif text-3xl md:text-6xl">
          Espace invité
        </h2>
        <div>
          Saisissez votre email pour recevoir votre lien de connexion sécurisé.
        </div>
        {errorMessage}
        {successMessage}
        <form action={ async (formData:FormData) => {

          startTransition(async () => {
            let response = await handleFormLogin(formData);
            if (response.error) {
              setShowError(true)
              setShowSuccess(false)
              return
            }
            else{
              setShowError(false)
              setShowSuccess(true)
              return
            }
          })

          
        }} className="grid gap-2 md:grid-cols-5">
          
          <div className="form-control col-span-3">
            <input 
              type="text" 
              name="email"
              placeholder="Email" 
              className="input input-bordered input-accent"
            />
          </div>
          <Button title="Se connecter" isPending={isPending}/>
         
        </form>


      </div>
      
    </div>
  )
}
export default Login