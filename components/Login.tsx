"use client"
import {handleFormLogin} from "@/utils/serverAction"
import {useState} from "react"

const Login = () => {

  const [showError, setShowError] = useState(false)
  const toastMarkup = showError && (
    <div className="toast toast-center toast-middle z-30">
      <div className="alert alert-error">
        <span>{`L'email n'existe pas. Demandez à Eric votre email.`}</span>
      </div>
    </div>
  );

  const [showSuccess, setShowSuccess] = useState(false)
  const successToast = showSuccess && (
    <div className="toast toast-center toast-middle z-30">
      <div className="alert alert-success">
        <span>{`Veuillez consulter votre boite email pour vous connecter.`}</span>
      </div>
    </div>
  )
  return (
    <div className="px-4 md:px-4 py-10 max-w-screen-lg mx-auto">
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
          if (response.error) {
            setShowError(true)
            setTimeout(()=>{
              setShowError(false)
            }, 3000)
            return
          }
          else{
            setShowSuccess(true)
            setTimeout(()=>{
              setShowSuccess(false)
            }, 5000)
            return
          }

          
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
        {toastMarkup}
        {successToast}

      </div>
      
    </div>
  )
}
export default Login