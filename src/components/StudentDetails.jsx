import React from 'react'
import { mockStudents } from '../services/mockApi'

const StudentDetails = ({studentId ,setShowStudentDetail , user ,setLoginModal}) => {
    console.log(studentId)
  return (

    <div  className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto  bg-opacity-10 backdrop-blur-sm">
        <div  className="w-11/12 max-w-[550px] rounded-lg border  bg-white p-6">
          
        {
    
        user ? 
        mockStudents?.map((item, i) => {
            if (item.id === studentId) {
            return (
                <div className='flex flex-col gap-5 ' key={i}>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-3xl text-slate-700'>{item.name}</h1>
                            <p className='text-md text-slate-400'>{item.description}</p>
                        </div>

                        <div>
                            <p onClick={()=>setShowStudentDetail(false)} className='text-2xl cursor-pointer'>x</p>
                        </div>

                    </div>
 
                   
                   <div className='text-xl text-slate-700 flex justify-between'>
                     <p>Course: {item.course}</p>
                     <p>Enrollment Date:{item.enrolledDate}</p>
                   </div>
                    
                   <p className='text-xl text-slate-400'>Student Email: {item.email}</p>
                   <p className='text-xl text-slate-400'>Contact: {item.phone}</p>
                   <p className='text-xl text-slate-400'>Address: {item.address}</p>
                </div>
            );
            } else {
            return null;
            }
        })
        :
        <div>
            
        </div>

        }
        
        
          
        </div>
    </div>
     
  )
}

export default StudentDetails