"use client"
import { logout } from '@/utils/serverActions'

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