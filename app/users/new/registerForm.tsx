"use client"

import {useRouter} from "next/navigation"

import InputGroup from "@/components/daisyui/inputGroup";
import Card from "@/components/daisyui/card";
import Button from "@/components/daisyui/button"

import {
  handleFormRegister
} from "@/utils/serverActions";
import {useTransition} from "react"

const RegisterForm = () => {

  let [isPending, startTransition] = useTransition()
  let router = useRouter()

  return (
    <form action={ async (formData: FormData)=>{
      startTransition(async () => {
        let response = await handleFormRegister(formData)
        if(!response.error){
          console.log(response)
          router.push(`/users/${response.user.slug}`)
        }
      })
    }}>
      <Card title='Ajouter'>
        <InputGroup label="Prénom" name="firstName" required/>
        <InputGroup label="Nom" name="lastName" required/>
        <InputGroup label="Email" name="email" type="email" required/>
        <Button title="Se connecter" isPending={isPending}/>
      </Card>
    </form>
  )
}
export default RegisterForm;