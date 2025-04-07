import React, {useState} from 'react'
import {FaArrowLeft} from 'react-icons/fa'
import bag from '../../assets/image/bag.png'
import note from '../../assets/image/note.png'

import smile from "../../assets/image/smile.png"
import text from "../../assets/image/text-bold.png"
import textone from "../../assets/image/italic.png"
import left from "../../assets/image/number.png"
import right from "../../assets/image/list.png"
import link from "../../assets/image/link.png"
import { useNavigate } from 'react-router-dom'

const Step2 = () => {

    const [description1, setDescription1] = useState('');
    const [description2, setDescription2] = useState('');
    const [description3, setDescription3] = useState('');
    const charCount1 = description1.length;
    const charCount2 = description2.length;
    const charCount3 = description3.length;

const navigate = useNavigate();

  const next =()=>{
    navigate('/jobpost/step3')
  }
  return (
    <div className="min-h-screen bg-white p-8">
          <div className=" mx-auto" >
    
            <div className=" flex items-center  text-gray-600 hover:text-purple-600 mb-7">
            <p><FaArrowLeft className="mr-3" /> </p>
        
            <h2 className="text-2xl font-semibold text-gray-800 ">Post a Job</h2>
            </div>
    
            <div className="flex items-center mb-10 justify-evenly">
              <div className="flex items-center font-medium">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-2"><img src={bag} alt="" className='h-6'/></div>
                <div className='text-sm text-gray-300'>
                    <p className=''>Step 1/3</p>
                    <p>Job Information</p>
                </div>
              </div>
    
              <div className="flex items-center font-medium">
                <div className="w-10 h-10 rounded-full bg-[#4640DE] flex items-center justify-center mr-2"><img src={note} alt="" className='h-6'/></div>
                <div className='text-sm  '>
                    <p className='text-[#4640DE]'>Step 2/3</p>
                    <p>Job Description</p>
                </div>
              </div>
    
              <div className="flex items-center font-medium">
                <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-300 flex items-center justify-center mr-2"><img src={bag} alt="" className='h-6'/></div>
                <div className='text-sm text-gray-300 '>
                    <p className=''>Step 3/3</p>
                    <p>Company Information</p>
                </div>
              </div>
            </div>
    
            {/* <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-medium text-gray-700 ">Details</h3>
              <p className='text-gray-300 mb-5'>Add the description of the job, responsibilities and Skill & Experience.</p>
            </div> */}
            <form method='post'>
            <div className="flex ">
      
      <div className="w-full p-4">
        <div className="">
          <h1 className="text-xl font-semibold ">Details</h1>
          <p className='text-gray-300'>Add the description of the job, responsibilities and Skill & Experience." </p>
        </div>
        <hr className='text-gray-300 my-5'/>
        <div className="flex pt-10">
          
          <div className="max-w-md w-full m-2">
          <h1 className="text-xl font-semibold ">Job Description</h1>
          <p className="text-gray-300 mt-2">Job titles must describe one position</p>
          </div>
          <div className="w-full m-2">
            
          <div className="border border-gray-300 rounded-md ">
            <textarea
              className="w-full h-32 p-3 resize-none border-b border-gray-300 focus:outline-none"
              placeholder="Enter job description"
              value={description1}
             onChange={(e) => setDescription1(e.target.value)}
              maxLength={500}
            ></textarea>

            <div className="flex items-center justify-between px-3 py-2 text-gray-600 text-sm">
              <div className="flex gap-3">
                <span className="cursor-pointer"><img src={smile} alt="" /></span>
                <span className="font-bold cursor-pointer"><img src={text} alt="" /></span>
                <span className="italic cursor-pointer"><img src={textone} alt="" /></span>
                <span className="cursor-pointer"><img src={right} alt="" /></span>
                <span className="cursor-pointer"><img src={left} alt="" /></span>
                <span className="cursor-pointer underline"><img src={link} alt="" /></span>
              </div>
              <div className="text-xs text-gray-500">
                Minimum 250 characters
              </div>
            </div>
          </div>

          <div className="text-right text-sm text-gray-500 mt-1">
            {charCount1}/500
          </div>
          </div>
        </div>
        <div className="flex pt-10">
          
          <div className="max-w-md w-full m-2">
          <h1 className="text-xl font-semibold ">Skills & experiences</h1>
          <p className="text-gray-300 mt-2">Outline the core responsibilities of the position.</p>
          </div>
          <div className="w-full m-2">
            
          <div className="border border-gray-300 rounded-md ">
            <textarea
              className="w-full h-32 p-3 resize-none border-b border-gray-300 focus:outline-none"
              placeholder="Enter job description"
              value={description2}
              onChange={(e) => setDescription2(e.target.value)}
              maxLength={500}
            ></textarea>

            <div className="flex items-center justify-between px-3 py-2 text-gray-600 text-sm">
            <div className="flex gap-3">
                <span className="cursor-pointer"><img src={smile} alt="" /></span>
                <span className="font-bold cursor-pointer"><img src={text} alt="" /></span>
                <span className="italic cursor-pointer"><img src={textone} alt="" /></span>
                <span className="cursor-pointer"><img src={right} alt="" /></span>
                <span className="cursor-pointer"><img src={left} alt="" /></span>
                <span className="cursor-pointer underline"><img src={link} alt="" /></span>
              </div>
              <div className="text-xs text-gray-500">
                Minimum 250 characters
              </div>
            </div>
          </div>

          <div className="text-right text-sm text-gray-500 mt-1">
            {charCount2}/500
          </div>
          </div>
        </div>
        <div className="flex pt-10">
          
          <div className="max-w-md w-full m-2">
          <h1 className="text-xl font-semibold ">Responsibilities</h1>
          <p className="text-gray-300 mt-2">Outline the core skills and experiences of the position.</p>
          </div>
          <div className="w-full m-2">
            
          <div className="border border-gray-300 rounded-md ">
            <textarea
              className="w-full h-32 p-3 resize-none border-b border-gray-300 focus:outline-none"
              placeholder="Enter job description"
              value={description3}
              onChange={(e) => setDescription3(e.target.value)}
              maxLength={500}
            ></textarea>

            <div className="flex items-center justify-between px-3 py-2 text-gray-600 text-sm">
            <div className="flex gap-3">
                <span className="cursor-pointer"><img src={smile} alt="" /></span>
                <span className="font-bold cursor-pointer"><img src={text} alt="" /></span>
                <span className="italic cursor-pointer"><img src={textone} alt="" /></span>
                <span className="cursor-pointer"><img src={right} alt="" /></span>
                <span className="cursor-pointer"><img src={left} alt="" /></span>
                <span className="cursor-pointer underline"><img src={link} alt="" /></span>
              </div>
              <div className="text-xs text-gray-500">
                Minimum 250 characters
              </div>
            </div>
          </div>

          <div className="text-right text-sm text-gray-500 mt-1">
            {charCount3}/500
          </div>
          </div>
        </div>
        <div className="text-right" >
            <div className="bg-[#4640DE] text-white px-6 py-2 rounded-md" 
            type='submit'
            onClick={next}
            >
            Next Step</div>
          </div>
      </div>
      </div>
            </form>
        </div>
    </div>
  )   
}

export default Step2
