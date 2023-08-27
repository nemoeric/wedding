"use client"

import MyButton from "@/components/daisyui/MyButton"
import InputGroup from "@/components/daisyui/inputGroup"
import { useState, useTransition } from "react"
import {
  savePlateChoiceForSaturday
} from "@/serverActions"

const PlateChoiceForm = ({
  user
}: {
  user: any
}) => {

  const plateDefinition = [
    {
      value: "Angus", label: "Steak Angus", selected: false
    },
    {
      value: "Tuna", label: "Tuna tataki", selected: false
    },
    {
      value: "Nasi", label: "Nasi Goreng (végétarien)", selected: false
    },

  ] 
  let [isPending, startTransition] = useTransition()
  const [showToast, setShowToast] = useState(false)

  const toastMarkup = showToast && (
    <div className="toast toast-top toast-right z-30">
      <div className="alert alert-success">
        <span>Vos réponses ont été prises en compte.</span>
      </div>
    </div>
  )

  return (
    <form className="" action={ (formData: FormData)=>{
      startTransition( async () => {
        let response = await savePlateChoiceForSaturday(formData)
        if(!response.error){
          console.log(response)
        }else{
          setShowToast(true)
          setTimeout(()=>{
            setShowToast(false)
          }, 2000)

        }

      })
    }}>
      <InputGroup 
        type="text"
        name="userId"
        defaultValue={user.id}
        hidden={true}
      />
      <select className="select select-primary w-full max-w-xs my-4" defaultValue={user.saturdayPlateChoice || ""} name="choice">
        <option disabled value="">Choisir</option>
        { plateDefinition.map( (plate,i) => <option key={i} value={plate.value}>{plate.label}</option>)}
      </select>
      <MyButton 
        title="Valider" 
        isPending={isPending} 
        className=""/>


        {toastMarkup}
  </form>
  )
}
export default PlateChoiceForm