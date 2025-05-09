import { collection ,addDoc} from 'firebase/firestore';
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { db } from '../services/firebase';

const AddStudentModal = ({setStudentModal}) => {


    const [studentData ,setStudentData] = useState({
        name:"",
        course:"",
        email:"",
        number:"",
        address:"",
        desc:""
    })

    function handleStudentChange(e){
        const{name , value} = e.target;

        setStudentData((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    async function addStudentHandler(studentData){
        if(!studentData.name || !studentData.email || !studentData.course || !studentData.number || !studentData.address || !studentData.desc){
            toast.error("All fields are required")
            return;
        }
        const toastid = toast.loading("Loading...")
        try{

            const studentsRef = collection(db , 'students');
            const docRef = await addDoc(studentsRef , studentData)
            toast.success("Student Added")
            setStudentData({
                name:"",
                course:"",
                email:"",
                number:"",
                address:"",
                desc:""
            })
            setStudentModal(false)
        } 
        catch(err){
            console.log(err)
        }
        toast.remove(toastid)
    }

  return (
    <div>
      <div  className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto  bg-opacity-10 backdrop-blur-sm">
        <form onSubmit={
            (e)=>{
            e.preventDefault()
            addStudentHandler(studentData)}} 
            className="w-11/12 max-w-[350px] flex flex-col gap-5 rounded-lg border border-slate-500  border-richblack-400 bg-richblack-800 p-6">

 
            <div className='flex justify-between'>
                <h1 className='text-3xl text-white font-semibold mb-5'>Add new student</h1>
                <p onClick={()=>setStudentModal(false)} className='text-3xl text-slate-300 cursor-pointer  mb-5'>x</p>
            </div>  
 
           <div>
                <label htmlFor="name" className='text-slate-300 text-xs'>Full Name <sup className='text-pink-400'>*</sup> </label>
                <input value={studentData.name} onChange={handleStudentChange} name='name' id='name' type="text" placeholder='Student name...' className='text-white outline-none rounded-lg p-3 w-full md:m-0 mx-auto bg-[#2A2B35]' />
           </div>
 
             
            <div className='flex flex-col'>
                <label htmlFor="id" className='text-slate-300 text-xs'>Course <sup className='text-pink-400'>*</sup> </label>
                <select value={studentData.course} onChange={handleStudentChange} name="course" id="course" className='text-white outline-none rounded-lg p-3 w-full md:m-0 mx-auto bg-[#2A2B35]'>
                    <option value="">-- Select Course --</option>
                    <option value="Maths">Maths</option>
                    <option value="Science">Science</option>
                    <option value="English">English</option>
                    <option value="History">History</option>
                </select>
            </div>
 
            <div>
                <label htmlFor="email" className='text-slate-300 text-xs'>Email <sup className='text-pink-400'>*</sup> </label>
                <input value={studentData.email} onChange={handleStudentChange} name='email' id='email' type="email" placeholder='Student email id...' className='text-white outline-none rounded-lg p-3 w-full md:m-0 mx-auto bg-[#2A2B35]' />
           </div>

           <div className='flex gap-3'>
              <div>
                  <label htmlFor="number" className='text-slate-300 text-xs'>Phone <sup className='text-pink-400'>*</sup> </label>
                  <input value={studentData.number} onChange={handleStudentChange} name='number' id='number' type="number" placeholder='Enter number...' className='text-white outline-none rounded-lg p-3 w-full md:m-0 mx-auto bg-[#2A2B35]' />
              </div>

              <div>
                    <label htmlFor="address" className='text-slate-300 text-xs'>Address <sup className='text-pink-400'>*</sup> </label>
                    <input value={studentData.address} onChange={handleStudentChange} name='address' id='address' type="address" placeholder='Enter address...' className='text-white outline-none rounded-lg p-3 w-full md:m-0 mx-auto bg-[#2A2B35]' />
              </div>
           </div>

            <div>
                <label htmlFor="desc">Description <sup className='text-pink-400'>*</sup> </label>
                <textarea value={studentData.desc} onChange={handleStudentChange} name='desc' placeholder='Enter student desscription' rows={5} id="desc" className='text-white outline-none rounded-lg p-3 w-full md:m-0 mx-auto bg-[#2A2B35]'></textarea>
            </div>

            <div>
                <button type='submit' className='className= bg-[#27AE60] w-fit md:m-0 mx-auto  px-10 py-2 rounded-lg text-xl text-white cursor-pointer hover:scale-90 transition-all duration-300'>Add Student</button>
            </div>
          
        </form>
    </div>
    </div>
  )
}

export default AddStudentModal