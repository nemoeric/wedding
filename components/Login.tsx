"use client"
import {handleFormLogin} from "@/utils/serverActions"
import {useState, useTransition} from "react"
import MyButton from "@/components/daisyui/MyButton"
const Login = () => {

  const [showError, setShowError] = useState(false)
  const errorMessage = showError && (
    <div className="text-sm text-error">{`L'email n'existe pas. Demandez votre email à Eric.`}</div>
  );

  const [showSuccess, setShowSuccess] = useState(false)
  const successMessage = showSuccess && (
    <div className="text-sm text-success">{`Veuillez cliquer sur le lien contenu dans l'email pour vous connecter de manière sécurisée.`}</div>
  )

  let [isPending, startTransition] = useTransition()

  return (
    <div className="py-6">
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
          <MyButton title="Se connecter" isPending={isPending}/>
         
        </form>


      </div>
      
    </div>
  )
}
export default Login