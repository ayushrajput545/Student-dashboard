import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const LoginModal = ({formType,setLoginModal ,setFormType}) => {
  return (
    <div  className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto  bg-opacity-10 backdrop-blur-sm">
        <div  className="w-11/12 max-w-[350px] rounded-lg border border-richblack-400 bg-richblack-800 p-6">
           {
            formType == "login"
            ?
            <LoginForm setLoginModal={setLoginModal} setFormType={setFormType}/>
            :
            <SignupForm setLoginModal={setLoginModal} setFormType={setFormType} />
           }
          
        </div>
    </div>
  )
}

export default LoginModal