"use client"
import { logout } from '@/serverActions'

const LogoutButton = ({
  children
}:{
  children: React.ReactNode
}) => {
  return (
    <div onClick={()=>logout()}>
      {children}
    </div>
  )

}
export default LogoutButton