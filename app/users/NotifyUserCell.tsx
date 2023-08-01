"use client"

import MyButton from '@/components/daisyui/MyButton'
import InputGroup from '@/components/daisyui/inputGroup'
import {notifyUser} from '@/utils/serverActions'
import { useTransition } from 'react'

const NotifyUserCell = ({user}:{
  user: any
}) => {

  let [isPending, startTransition] = useTransition()
  
  return (
    <form action={ (formData: FormData)=>{
      startTransition(async () => {
        let response = await notifyUser(formData)
        if(!response.error){
          console.log(response)
        }
      })
    }}>
      
      <InputGroup 
        type="text"
        name="userId"
        defaultValue={user.id}
        hidden={true}
      />
      <MyButton title="Notifier" isPending={isPending} className="btn-xs"/>
    </form>
  )

}
export default NotifyUserCell