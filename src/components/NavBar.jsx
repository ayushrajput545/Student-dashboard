import React from 'react'
import LoginModal from './LoginModal';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
import { auth } from '../services/firebase';
const NavBar = ({user , loginModal , setLoginModal ,formType , setFormType}) => {


   function handleClick(){
    setFormType("signup")
    setLoginModal(true)
   }

   async function handleLogOut(){
    try{
      signOut(auth)
      toast.success("Logged Out")
    }
    catch(err){
      console.log(err)
      toast.error("Logut Failed")
    }

   }

  return (
    <div className='md:w-11/12 w-full mx-auto mt-5 flex justify-between'>
        <h1 className='text-white md:text-4xl m-3 text-2xl font-bold'>Student <span className='text-[#27AE60]'>Dashboard</span></h1>
        {
          !user ?  
            <div className='flex '>
               <button onClick={
               ()=>{
                setLoginModal(true)
                setFormType("login")
               }} className='bg-slate-800 border border-slate-500 m-3 px-3 py-2 rounded-lg md:text-xl max-h-[50px] text-white cursor-pointer hover:scale-90 transition-all duration-300'>Login</button>  
              <button 
              onClick={handleClick} className='bg-slate-800 border border-slate-500 m-3 px-3 py-2 rounded-lg md:text-xl max-h-[50px] text-white cursor-pointer hover:scale-90 transition-all duration-300'>Signup</button>  
          </div>
          :
            <div>
              <button onClick={handleLogOut} className='bg-slate-800 border border-slate-500 m-3 px-3 py-2 rounded-lg md:text-xl max-h-[50px] text-white cursor-pointer hover:scale-90 transition-all duration-300'>Logout</button>  
            </div>
          
        }
         
        {
          loginModal && (
            <LoginModal setFormType={setFormType} setLoginModal={setLoginModal} formType={formType}/>
          )
        }
    </div>
  )
}

export default NavBar