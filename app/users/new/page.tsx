
import RegisterForm from './registerForm'

const NewUser = () => {

  console.log('NewUser');
  
  return (
    <div className='bg-white'>
      <div className=' max-w-lg mx-auto py-20'>
        <RegisterForm/>
      </div>
    </div>
  )
}
export default NewUser;