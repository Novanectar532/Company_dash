import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import bag from '../../assets/image/bag.png'
import note from '../../assets/image/note.png'


const Step3 = () => {
  return (
    <>
    <div className="mx-auto">
    <div className=" flex items-center  text-gray-600 hover:text-purple-600 mb-7 p-2">
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
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-2"><img src={note} alt="" className='h-6'/></div>
                    <div className='text-sm text-gray-300 '>
                        <p className=''>Step 2/3</p>
                        <p>Job Description</p>
                    </div>
                  </div>
        
                  <div className="flex items-center font-medium">
                    <div className="w-10 h-10 rounded-full bg-[#4640DE] text-gray-300 flex items-center justify-center mr-2"><img src={bag} alt="" className='h-6'/></div>
                    <div className='text-sm  '>
                        <p className='text-[#4640DE]'>Step 3/3</p>
                        <p>Company Information</p>
                    </div>
                  </div>
                </div>
                <div className="">
          <h1 className="text-xl font-semibold ">Details</h1>
          <p className='text-gray-300'>Add the description of the job, responsibilities and Skill & Experience." </p>
        </div>
        <hr className='text-gray-300 my-5'/>


        <div className="  p-6 bg-white  rounded-lg">
      {/* Company Logo Section */}
      <div className="flex">
        <div className="w-100">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Company Logo
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            This image will be shown publicly as company logo.
          </p>
        </div>
        <div className="flex gap-x-5"> {/*for logo img*/ }
        <img
            src="src/assets/companyLogo/CompanyLogo.png"
            alt="Company Logo"
            className="mx-auto mb-2 w-40 h-40"
          />
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center mb-6 w-100 ">
          
          <div className="">
          <p className="text-gray-500 text-sm">
            Click to replace or drag and drop
          </p>
          <p className="text-gray-500 text-xs">
            SVG, PNG, JPG or GIF (max. 400x400px)
          </p>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="logoUpload"
          />
          <label htmlFor="logoUpload" className="cursor-pointer text-blue-500">
            Upload Logo
          </label>
          </div>
        </div>
        </div>
      </div>

      {/* Company Details Section */}
      <div className="flex mt-10">
      <div className="w-100">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Company Details
      </h2>
      <p className="text-gray-500 text-sm mb-4 w-75">
        Introduce your company core info quickly to users by filling up company
        details
      </p>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Company Name
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your company name"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Website URL
          </label>
          <input
            type="url"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your company URL"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Location
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your location"
          />
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Employee Strength
            </label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter the employee strength"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Industry
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Belong to which industry"
            />
          </div>
        </div>
        <label className="block text-gray-700 text-sm font-medium mb-1">
              Date Founded
            </label>
        <div className="flex space-x-4">
            
          <div className="w-1/3">
            
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Day"
            />
          </div>
          <div className="w-1/3">
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Month"
            />
          </div>
          <div className="w-1/3">
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Year"
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Technology
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Using which technology"
          />
        </div>
      </div>
      </div>


      {/* About Company Section */}
      <div className="flex mt-10">
      <div className="w-100">
      <h2 className="text-xl font-semibold text-gray-700 mb-4 mt-6">
        About Company
      </h2>
      <p className="text-gray-500 text-sm mb-4">
        Brief description for your company. URLs are hyperlinked.
      </p>
      </div>
      <div>
        
        <textarea
          className="w-160 p-2 border border-gray-300 rounded-md h-32"
          placeholder="Enter description"
          maxLength={250}
        ></textarea>
        <p className="text-gray-500 text-xs mt-1">
          Maximum 250 characters 0/250
        </p>
      </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4 mt-6">
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
          Cancel
        </button>
        <button className="px-4 py-2 bg-[#4640DE] text-white rounded-md">
          Save Changes
        </button>
      </div>
    </div>
        </div>

    
    </>
  );
};

export default Step3;
