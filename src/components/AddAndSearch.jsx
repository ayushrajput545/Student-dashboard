import React, { useEffect, useState } from 'react'
import AddStudentModal from './AddStudentModal'
import { mockStudents } from '../services/mockApi'
import toast from 'react-hot-toast'

const AddAndSearch = ({user,setFormType, setFilterStudent, setLoginModal}) => {

  const [studentModal , setStudentModal] = useState(false)
  const [searchText , setSearchText] = useState('')

  useEffect(()=>{
    const filtered = mockStudents.filter(student => student.course.toLowerCase().includes(searchText.toLowerCase()));
    setFilterStudent(filtered)
  } , [searchText , mockStudents ,setFilterStudent])


  return (
    <div className='md:w-10/12 w-full mx-auto mt-8 flex flex-col md:flex-row gap-3 justify-between '>

      <button onClick={
        ()=> {
          if(!user){
            toast.error("Login required")
            setFormType("login")
            setLoginModal(true)
          }
          else{
            setStudentModal(true)
          }
        }

      } className='bg-[#27AE60] w-fit md:m-0 mx-auto  px-10 py-2 rounded-lg text-xl text-white cursor-pointer hover:scale-90 transition-all duration-300'>Add Student</button> 
      <input value={searchText} onChange={(e)=>setSearchText(e.target.value)} type="text" placeholder='Search by course... e.g:English' className='text-white outline-none rounded-lg p-3 md:w-1/2 w-5/6 md:m-0 mx-auto bg-[#2A2B35]'  /> 
      {
        studentModal &&(
          <AddStudentModal setStudentModal={setStudentModal}/>
        )
      }
    </div>
  )
}

export default AddAndSearch