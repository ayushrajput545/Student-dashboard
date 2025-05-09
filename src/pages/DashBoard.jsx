import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import AddAndSearch from '../components/AddAndSearch'
import { fetchStudents } from '../services/mockApi';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';
import StudentDetails from '../components/StudentDetails';
import toast from 'react-hot-toast';

const DashBoard = () => {

    const [students , setStudent] = useState();
    const [filterStudent , setFilterStudent] = useState(students);
    const [ user , setUser] = useState(null)
    const [loginModal , setLoginModal] = useState(false);
    const [formType , setFormType] = useState("login")
    const [ showStudentDetails , setShowStudentDetail] = useState(false);
    const [studentId , setStudentIDd] = useState(null) 
    

    useEffect(()=>{
        fetchStudents().then((data)=>setStudent(data));
        const unsubscribe = onAuthStateChanged(auth , (currentUser)=>{
          setUser(currentUser)
        })
        return () => unsubscribe();
    },[])

    function showDetail(id){
      setShowStudentDetail(true)
      setStudentIDd(id)
    }

  return (
    <div className='min-h-screen'>
        <div>
          <NavBar formType={formType} setFormType={setFormType} loginModal={loginModal} setLoginModal={setLoginModal} user={user}/>
        </div>

        <div>
            <AddAndSearch setFormType={setFormType}  setLoginModal={setLoginModal} user={user} setFilterStudent={setFilterStudent} filterStudent={filterStudent}/>
        </div>



        <div className="p-4 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filterStudent?.map((student) => (
          <div
            key={student.id}
            onClick={
              ()=>{
                if(user){
                  showDetail(student.id)
                }
                else{
                  toast.error("Login Required !")
                  setLoginModal(true)
                  setFormType("login")
                }
              }}
            className="text-slate-300 shadow-md cursor-pointer hover:scale-90 rounded-lg p-4 bg-slate-500 hover:shadow-lg transition-all duration-200"
          >
            <h2 className="text-lg font-semibold">{student.name}</h2>
            <p className="text-sm text-gray-300"> Course: {student.course}</p>
            <p className="text-sm text-gray-400"> {student.email}</p>
            <p className="mt-2 text-sm text-gray-400">{student.description}</p>
             
          </div>
        ))}
      </div>

      {
        showStudentDetails &&(
          <StudentDetails setLoginModal={setLoginModal} user={user} studentId = {studentId} setShowStudentDetail={setShowStudentDetail}/>
        )
      }
        

    </div>
  )
}

export default DashBoard