import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';

const SignupForm = ({setLoginModal,setFormType}) => {

  const [formData , setFormData] = useState({
    name:"",
    email:"",
    password:""
  })

  function handleOnChange(e){
    const {name , value} = e.target; 

    setFormData((prev)=>({
      ...prev,
      [name]:value
    }))
  }

  async function registerUser(e){
    e.preventDefault();
    const toastid = toast.loading('Loading...')
    try{
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      toast.success("Account created! Please Login")
      setFormType("login")
      setFormData({
        name:"",
        email:"",
        password:""
      })
    }
    catch(err){
      console.log(err)
      toast.error(err.message || "Something went wrong");
    }
    toast.remove(toastid)
  }



  return (
    <form onSubmit={registerUser} className='flex flex-col gap-3'>
        <div className='flex justify-between'>
            <h1 className='text-3xl text-white font-semibold mb-5'>Signup</h1>
            <p onClick={()=>setLoginModal(false)} className='text-3xl text-slate-300 cursor-pointer  mb-5'>x</p>
        </div>     
        <input name='name' value={formData.name} onChange={handleOnChange} type="text" placeholder='Enter your name...' className='text-white outline-none rounded-lg p-3 w-full md:m-0 mx-auto bg-[#2A2B35]' />
        <input name='email' value={formData.email} onChange={handleOnChange} type="email" placeholder='Enter your email...' className='text-white outline-none rounded-lg p-3 w-full md:m-0 mx-auto bg-[#2A2B35]' />
        <input name='password' value={formData.password} onChange={handleOnChange} type="password" placeholder='Enter your password...' className='text-white outline-none rounded-lg p-3 w-full md:m-0 mx-auto bg-[#2A2B35]'/>
        <button type='submit' className='bg-slate-800 border border-slate-500 m-3 px-3 py-2 rounded-lg md:text-xl max-h-[50px] text-white cursor-pointer w-fit  hover:scale-90 transition-all duration-300'>Create Account</button>  

     </form>
  )
}

export default SignupForm