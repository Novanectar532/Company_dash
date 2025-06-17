import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
function AllAplicant() {
    const [applicant, setapllicant] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get('http://localhost:5000/api/applications');
            console.log(res.data);
            setapllicant(res.data.applications);
          } catch (err) {
            console.error('Failed to fetch applications:', err);
          }
        };
      
        fetchData();
      }, []);

      console.log("apllo",applicant)
  return (
    <>
     <div className="flex flex-col bg-white">
      {/* Left Panel */}
      <div className=" rounded-lg  p-5">
        <div className="flex flex-col items-center gap-4">
          
          <div>
            <h2 className="text-lg font-bold">All Applicant </h2>
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  {applicant.map((appl, index) => (
    <div
      key={index}
      className="bg-gradient-to-b w-64  from-blue-100 to-blue-300  shadow-xl rounded-2xl p-6 hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02]"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{appl.fullName}</h2>
      <p className="text-gray-700"> <span>{appl.email}</span></p>
      <p className="text-sm text-gray-500 mb-1">Applied At: {new Date(appl.appliedAt).toLocaleDateString()}</p>
      
      <p className="flex text-gray-700 space-x-5"><p className='w-20' >Job Title</p><span className="font-medium "></span> {appl.jobTitle}</p>
      <p className="text-gray-700 space-x-5 flex  "><p className='w-20'>Phone</p><p className="font-medium ">{appl.phone}</p> </p>
      <p className="flex items-center text-gray-700 space-x-5">
        <span className="font-medium w-20">LinkedIn</span>{' '}
        <a href={appl.linkedinUrl} >
        <FaExternalLinkAlt/>
        </a>
        
      </p>
      <p className="flex items-center text-gray-700 space-x-5">
        <span className="font-medium w-20">Portfolio</span><a href={appl.portfolioUrl} >
        <FaExternalLinkAlt/>
        </a>
        
      </p>
    </div>
  ))}
</div>

        </div>
        </div>
        </div>
    
    </>
  )
}

export default AllAplicant