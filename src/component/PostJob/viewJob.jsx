import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const ViewJob = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jobpost")
      .then((result) => setJobs(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete=(id)=>{
    axios.delete('http://localhost:5000/api/jobpost/'+id)
    .then(result => {
      // setJobs(result.data)
  
    })
    .catch(err =>console.log(err))
  } 
  const date = new Date(jobs.createdAt);
  console.log('ey',date)
  return (
    <>
      <div className="p-2 grid grid-cols-2 ">
        {jobs.map((job) => (
          <div className="max-w-lg mb-6 p-6 bg-white rounded-2xl shadow-md border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <img src={job.companyLogo} alt="Logo" className="w-10" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {job.jobTitle}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {job.employmentType.join(" | ")}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">
                Posted on: {new Date(job.createdAt).toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' })
              }

                  
                </p>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Company:</span>{" "}
                <a
                  href={job.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {job.companyName}
                </a>{" "}
                | <span className="font-semibold">Location:</span>{" "}
                {job.location}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Industry:</span> {job.industry}{" "}
                | <span className="font-semibold">Employees:</span>{" "}
                {job.employeeStrength}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Salary:</span> {job.sallery}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Technology Areas:</span>{" "}
                {job.technology}
              </p>
            </div>

            <div className="mt-4 space-y-3">
              <div>
                <h3 className="text-md font-semibold text-gray-800">
                  Job Description
                </h3>
                <p className="text-sm text-gray-600">{job.jobDescription}</p>
              </div>

              <div>
                <h3 className="text-md font-semibold text-gray-800">
                  Responsibilities
                </h3>
                <p className="text-sm text-gray-600">{job.responsibilities}</p>
              </div>

              <div>
                <h3 className="text-md font-semibold text-gray-800">
                  Skills & Experience
                </h3>
                <p className="text-sm text-gray-600">
                  {job.skillsAndExperience}
                </p>
              </div>

              <div>
                <h3 className="text-md font-semibold text-gray-800">
                  Required Skills
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {job.requiredSkills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-md font-semibold text-gray-800">
                  About Company
                </h3>
                <p className="text-sm text-gray-600 ">
                  {job.aboutCompany}
                </p>
              </div>
            </div>
            
            <div className=" flex gap-2 justify-end">
            <Link
              to={`/updatejob/${job._id}`}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300   "
            >
              Update
            </Link>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300  "
             onClick={()=>handleDelete(job._id)}
            >Delete</button>
          
            </div>

            </div>
        ))}
      </div>
    </>
  );
};

export default ViewJob;
