"use client"
import MyButton from '@/components/daisyui/MyButton'
import InputGroup from '@/components/daisyui/inputGroup'
import { useTransition } from 'react'
import {inviteUserToWebsite} from '@/utils/serverActions'

const NotifyUserCell = ({user}:{
  user: any
}) => {

  let [isPending, startTransition] = useTransition()
  
  return (
    <form action={ (formData: FormData)=>{
      startTransition(async () => {
        let response = await inviteUserToWebsite(formData)
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
      <MyButton 
        title="Invite" 
        isPending={isPending} 
        className="btn-xs text-xs"/>
    </form>
  )

}
export default NotifyUserCell