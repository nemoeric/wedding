"use client"


import InputGroup from "@/components/daisyui/inputGroup";
import Card from "@/components/daisyui/card";
import {
  handleFormRegister
} from "@/utils/serverActions";

const RegisterForm = () => {



  return (
    <form action={ async (formData: FormData)=>{
      await handleFormRegister(formData)
    }} method="post">
      <Card title='Ajouter'>
        <InputGroup label="Prénom" name="firstName" required/>
        <InputGroup label="Nom" name="lastName" required/>
        <InputGroup label="Email" name="email" required/>
        <button className='btn btn-primary'>
          Valider
        </button>

      </Card>
    </form>
  )
}
export default RegisterForm;