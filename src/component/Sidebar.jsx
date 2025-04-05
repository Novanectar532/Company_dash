import React from 'react'
import { useNavigate } from 'react-router-dom';
function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
       <aside className="w-full bg-white shadow-md hidden lg:block">
        <h1 className="text-2xl  font-bold text-blue-600 pl-6 pt-2">NextHire</h1>
        <nav className="mt-6 pb-10 text-lg  pl-5.5 border-r border-blue-200">
          <a onClick={()=>navigate('/')} className=" cursor-pointer block p-2 rounded ">
            Dashboard
          </a>
          <a onClick={()=>navigate('/comapnyprofile')} className=" cursor-pointer block p-2 rounded ">
           Company Profile
          </a>
          <a onClick={()=>navigate('/message')} className=" cursor-pointer block p-2 rounded ">
           Messages
          </a>
          <a onClick={()=>navigate('/myapplication')} className=" cursor-pointer block p-2 rounded ">
           All Applicants
          </a>
          <a href="#" className=" cursor-pointer block p-2 rounded ">
           Job Listing
          </a>
          <a onClick={()=>navigate('/schedule')} className=" cursor-pointer block p-2 rounded ">
           My Schedule
          </a>
        </nav>
        <hr className='text-blue-200 mx-3 ' />
        <nav className='border-r border-blue-200 pt-5 pb-6 text-lg pl-5.5 '>
        <a href="#" className=" cursor-pointer block p-2 rounded ">
            Setting
          </a>
          <a href="#" className=" cursor-pointer block p-2 rounded ">
            Help Center
          </a>
          <a href="#" className=" cursor-pointer block p-2 rounded ">
            Logout
          </a>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar