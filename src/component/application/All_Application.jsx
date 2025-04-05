import React from "react";
import { useState } from "react";

const applicants = [
  {
    name: "John Mayer",
    image: "https://i.pravatar.cc/40?img=1",
    stage: "Interview",
    stageColor: "border-orange-500 text-orange-500",
    date: "12 March, 2025",
    role: "UI/UX Designer",
  },
  {
    name: "Ally Wales",
    image: "https://i.pravatar.cc/40?img=2",
    stage: "Interview",
    stageColor: "border-orange-500 text-orange-500",
    date: "12 March, 2025",
    role: "Software Engineer",
  },
  {
    name: "Jerome Bell",
    image: "https://i.pravatar.cc/40?img=3",
    stage: "Shortlisted",
    stageColor: "border-blue-500 text-blue-500",
    date: "12 March, 2025",
    role: "Dot Net Developer",
  },
  {
    name: "Joe Bartmann",
    image: "https://i.pravatar.cc/40?img=4",
    stage: "Declined",
    stageColor: "border-red-500 text-red-500",
    date: "12 March, 2025",
    role: "Graphic Designer",
  },
  {
    name: "Allison Geidt",
    image: "https://i.pravatar.cc/40?img=5",
    stage: "Hired",
    stageColor: "border-green-500 text-green-500",
    date: "12 March, 2025",
    role: "JavaScript Developer",
  },
  {
    name: "Ally Wales",
    image: "https://i.pravatar.cc/40?img=2",
    stage: "Interview",
    stageColor: "border-orange-500 text-orange-500",
    date: "12 March, 2025",
    role: "Software Engineer",
  },
  {
    name: "Jerome Bell",
    image: "https://i.pravatar.cc/40?img=3",
    stage: "Shortlisted",
    stageColor: "border-blue-500 text-blue-500",
    date: "12 March, 2025",
    role: "Dot Net Developer",
  },
  {
    name: "Joe Bartmann",
    image: "https://i.pravatar.cc/40?img=4",
    stage: "Declined",
    stageColor: "border-red-500 text-red-500",
    date: "12 March, 2025",
    role: "Graphic Designer",
  },
  {
    name: "Allison Geidt",
    image: "https://i.pravatar.cc/40?img=5",
    stage: "Hired",
    stageColor: "border-green-500 text-green-500",
    date: "12 March, 2025",
    role: "JavaScript Developer",
  },
];

export default function All_Application() {

    const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;


  return (
    <div className="flex  w-full">

      
      <div className="p-4 w-full mx-auto ">
        
      <div className="flex justify-between items-center p-4 border-b">
      <h2 className="text-lg font-semibold">Total Applicants: 24</h2>
      <div className="relative">
        <input
          type="text"
          placeholder="Search Applicants"
          className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 md:block hidden"
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 md:block hidden ">
          🔍
        </span>
      </div>
    </div>


      <div className="hidden md:block">
        <div className="flex justify-between bg-gray-100 p-3 rounded-md font-semibold ">
          <div>Full Name</div>
          <div>Job Role</div>
          <div>Hiring Stage</div>
          <div>Action</div>
        </div>
        {applicants.map((applicant, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b py-3"
          >
            <div className="flex items-center space-x-2">
              <img
                src={applicant.image}
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <span>{applicant.name}</span>
            </div>
            <div>{applicant.role}</div>
            <span
              className={`border px-3 py-1 rounded-full text-sm ${applicant.stageColor}`}
            >
              {applicant.stage}
            </span>
            <button className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-md">
              See Application
            </button>
          </div>
        ))}
      </div>


      <div className="md:hidden">
        {applicants.map((applicant, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md mb-4">
            <div className="flex items-center justify-between space-x-3">
             <div className="flex space-x-3 items-center">
             <img
                src={applicant.image}
                alt="avatar"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold">{applicant.name}</h3>
                <p className="text-gray-500 text-sm">{applicant.role}</p>
              </div>
             </div>
              <span
                className={`border px-3 py-1 rounded-full text-sm ${applicant.stageColor}`}
              >
                {applicant.stage}
              </span>
            </div>
            <button className="w-full mt-3 bg-indigo-100 text-indigo-600 py-2 rounded-md">
              See Application
            </button>
          </div>
        ))}
      </div>

    
      <div className="flex justify-center space-x-5 mt-4 md:justify-end">
        <button
          className="text-gray-500"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          &lt;
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded-md ${
              currentPage === i + 1
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="text-gray-500 "
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        >
          &gt;
        </button>
      </div>
    </div>
    </div>
  );
}
