import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import bag from "../../assets/image/bag.png";
import note from "../../assets/image/note.png";
import smile from "../../assets/image/smile.png"
import text from "../../assets/image/text-bold.png"
import textone from "../../assets/image/italic.png"
import left from "../../assets/image/number.png"
import right from "../../assets/image/list.png"
import link from "../../assets/image/link.png"
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import axios from 'axios'


const PostJob= () => {
  
  const [jobTitle, setTitle] = useState("");
  const [employmentType, setEmploymentType] = useState([]);
  const [sallery, setSallery] = useState(1000);
  const [categories, setCategories] = useState("");
  const [requiredSkills, setRequiredSkills] = useState(["JavaScript", "React", "Node.js"]);
  
  const navigate = useNavigate()
  
  const submit = (e) => {
     e.preventDefault();
     try {
      axios
    .post("http://localhost:5000/api/jobpost", {
        jobTitle,
        employmentType,
        sallery,
        categories,
        requiredSkills,
        jobDescription,
        responsibilities,
        skillsAndExperience,
        companyLogo,
        companyName,
        websiteUrl,
        location,
        employeeStrength,
        industry,
        technology,
        aboutCompany,
        day ,
        month,
        year
      })
      
      .then((result) => {
        console.log(result);
        navigate('/viewjob')
      })
      .catch((err) => console.log(err));
     } catch (error) {
       console.log(error)
       
     }
     finally{setLoading(false)}
  };
  
  
  const [input, setInput] = useState([]);
  const handleAddSkill = () => {
    if (input.trim() !== "" && !requiredSkills.includes(input.trim())) {
      setRequiredSkills([...requiredSkills, input.trim()]);
      setInput("");
    }
  };
  const handleRemoveSkill = (skillToRemove) => {
    setRequiredSkills(requiredSkills.filter((skill) => skill !== skillToRemove));
  };
  // -----------------------------------------------------------
  
  const handleEmploymentTypeChange = (e) => {
    const { value, checked } = e.target;
    
    if (checked) {
      setEmploymentType((prev) => [...prev, value]);
    } else {
      setEmploymentType((prev) => prev.filter((type) => type !== value));
    }
  };
  
  //   Step 2 
  
  const [jobDescription, setJobDescription] = useState('');
  const [skillsAndExperience, setSkillsAndExperience] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const charCount1 = jobDescription.length;
  const charCount2 = skillsAndExperience.length;
  const charCount3 = responsibilities.length;
  
  
  // ------------------step 3 
  //
  const [companyLogo, setCompanyLogo] = useState(""); // URL of uploaded logo
  const [companyName, setCompanyName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
const [location, setLocation] = useState("");
const [employeeStrength, setEmployeeStrength] = useState("");
const [industry, setIndustry] = useState("");
const [technology, setTechnology] = useState("");
const [day , setDay] = useState('')
const [month , setMonth] = useState('')
const [year , setYear] = useState('')
const [aboutCompany , setAboutCompany]= useState('')
const charCount = aboutCompany.length;

const [loading , setLoading] = useState(false);
const [step, setStep] = useState(1);
  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      
      <div>
        {/* STEP 1 */}
        {step === 1 && (
            <>
               <div className="min-h-screen bg-white p-8">
                 
                   <div className=" flex items-center  text-gray-600 hover:text-purple-600 mb-7">
                     <p>
                       <FaArrowLeft className="mr-3" />{" "}
                     </p>
         
                     <h2 className="text-2xl font-semibold text-gray-800 ">
                       Post a Job
                     </h2>
                   </div>
         
                   <div className="flex items-center mb-10 justify-evenly">
                     <div className="flex items-center font-medium">
                       <div className="w-10 h-10 rounded-full bg-[#4640DE] flex items-center justify-center mr-2">
                         <img src={bag} alt="" className="h-6" />
                       </div>
                       <div className="text-sm">
                         <p className="text-[#4640DE]">Step 1/3</p>
                         <p>Job Information</p>
                       </div>
                     </div>
         
                     <div className="flex items-center font-medium">
                       <div className="w-10 h-10 rounded-full bg- flex items-center justify-center mr-2">
                         <img src={note} alt="" className="h-6" />
                       </div>
                       <div className="text-sm text-gray-300 ">
                         <p className="">Step 2/3</p>
                         <p>Job Description</p>
                       </div>
                     </div>
         
                     <div className="flex items-center font-medium">
                       <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-300 flex items-center justify-center mr-2">
                         <img src={bag} alt="" className="h-6" />
                       </div>
                       <div className="text-sm text-gray-300 ">
                         <p className="">Step 3/3</p>
                         <p>Company Information</p>
                       </div>
                     </div>
                   </div>
         
                   <div className="bg-white rounded-lg p-6">
                     <h3 className="text-lg font-medium text-gray-700 ">
                       Basic Information
                     </h3>
                     <p className="text-gray-300 mb-5">
                       This information will be displayed publicly
                     </p>
                     <hr className="text-gray-300 my-5" />
                     <div className="mb-6 flex">
                       <label className="block w-100  mb-1">
                         <h1 className="font-semibold">Job Title </h1>
                         <p className="text-gray-300 ">
                           Job titles must be describe one position
                         </p>
                       </label>
                       <div>
                         <input
                           type="text"
                           placeholder="e.g. Software Engineer"
                           className="w-150 border border-gray-300 p-3 rounded-md placeholder-gray-400 "
                           onChange={(e) => setTitle(e.target.value)}
                         />
                         <p className="text-xs text-gray-400 mt-1">
                           At least 80 characters
                         </p>
                       </div>
                     </div>
         
                     <div className="mb-6 flex ">
                       <label className="block  mb-1 w-100">
                         <p className="font-semibold">Type of Employment </p>
                         <p className="text-gray-300 ">
                           You can select multiple type of employment
                         </p>
                       </label>
                       <div className=" space-y-2  ">
                         {[
                           "Full-time",
                           "Part-time",
                           "Remote",
                           "Internship",
                           "Contract",
                         ].map((type) => (
                           <label key={type} className="flex items-center space-x-2">
                             <input
                               type="checkbox"
                               value={type}
                               onChange={handleEmploymentTypeChange}
                               className="form-checkbox text-purple-600"
                               checked={employmentType.includes(type)}
                             />
                             <span>{type}</span>
                           </label>
                         ))}
                       </div>
                     </div>
         
                     <div className=" flex">
                       <label className="block  mb-1 w-100">
                         <p className="font-semibold">Salary </p>
                         <p className="text-gray-300 mb-2">
                           Please specify the estimated salary range for the role.
                         </p>
                       </label>
                       <div className="flex items-center gap-4">
                         <span className="text-sm text-gray-500 font-medium">₹ 0</span>
                         <input
                           type="range"
                           min="0"
                           max="15000"
                           className="w-120"
                           value={sallery}
                           onChange={(e) => setSallery(e.target.value)}
                         />
                         <span className="text-sm text-gray-500 font-medium">
                           ₹ 15,000
                         </span>
                       </div>
                     </div>
                     <p className=" font-semibold text-right">
                       Selected Salary: ₹ {sallery}
                     </p>
         
                     <div className="mb-6 mt-5 flex ">
                       <label className=" mb-1 w-100">
                         <p className=" font-semibold">Categories</p>
                         <p className="text-gray-300">
                           You can select multiple job categories
                         </p>
                       </label>
                       <select
                         className="w-150 border border-gray-300 p-3 rounded-md text-gray-600"
                         onChange={(e) => setCategories(e.target.value)}
                       >
                         <option>Select Job1 </option>
                         <option>Select Job2 </option>
                         <option>Select Job3 </option>
                         <option>Select Job4 </option>
                       </select>
                     </div>
         
                     <div className="mb-6 flex">
                       <label className="block  mb-1 w-100">
                         <p className="font-semibold">Required Skills </p>
                         <p className="text-gray-300">Add required skills for the job</p>
                       </label>
         
                       <div>
                         <div className="mb-2">
                           <input
                             type="text"
                             value={input}
                             onChange={(e) => setInput(e.target.value)}
                             placeholder="Enter a skill"
                             className="border  border-gray-300 p-3 rounded-md text-gray-600 w-100 "
                           />
                           
                           <button
                             onClick={handleAddSkill}
                             className="border border-purple-500 text-purple-600 p-2 text-sm mx-2 "
                           >
                             + Add Skills
                           </button>
                         </div>
         
                         <div className="flex flex-wrap gap-2">
                           {requiredSkills.map((skill, index) => (
                             <div
                               key={index}
                               className="flex items-center text-[#4640DE] px-3 py-1 rounded-full text-sm border border-gray-500"
                             >
                               {skill}
                               <span
                                 className="ml-2 text-gray-400 cursor-pointer"
                                 onClick={() => handleRemoveSkill(skill)}
                               >
                                 ✕
                               </span>
                             </div>
                           ))}
                           
                         </div>
                       </div>
                     </div>
         
                     
                   </div>
                 
               </div>
             </>
           
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
          <div className="min-h-screen bg-white p-8">
            <div className="mx-auto">
                <div className="flex items-center text-gray-600 hover:text-purple-600 mb-7 cursor-pointer">
                    <FaArrowLeft className="mr-3" />
                    <h2 className="text-2xl font-semibold text-gray-800">Post a Job</h2>
                </div>

                <div className="flex items-center mb-10 justify-evenly">
                    <div className="flex items-center font-medium">
                        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-2">
                            <img src={bag} alt="job" className="h-6" />
                        </div>
                        <div className="text-sm text-gray-300">
                            <p>Step 1/3</p>
                            <p>Job Information</p>
                        </div>
                    </div>

                    <div className="flex items-center font-medium">
                        <div className="w-10 h-10 rounded-full bg-[#4640DE] flex items-center justify-center mr-2">
                            <img src={note} alt="description" className="h-6" />
                        </div>
                        <div className="text-sm">
                            <p className="text-[#4640DE]">Step 2/3</p>
                            <p>Job Description</p>
                        </div>
                    </div>

                    <div className="flex items-center font-medium">
                        <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-300 flex items-center justify-center mr-2">
                            <img src={bag} alt="company" className="h-6" />
                        </div>
                        <div className="text-sm text-gray-300">
                            <p>Step 3/3</p>
                            <p>Company Information</p>
                        </div>
                    </div>
                </div>

                
                    <div className="flex">
                        <div className="w-full p-4">
                            <div>
                                <h1 className="text-xl font-semibold">Details</h1>
                                <p className="text-gray-300">Add the description of the job, responsibilities and Skill & Experience.</p>
                            </div>
                            <hr className="text-gray-300 my-5" />
                            <div className="flex pt-10">
                                <div className="max-w-md w-full m-2">
                                    <h1 className="text-xl font-semibold">Job Description</h1>
                                    <p className="text-gray-300 mt-2">Job titles must describe one position</p>
                                </div>
                                <div className="w-full m-2">
                                    <div className="border border-gray-300 rounded-md">
                                        <textarea
                                            className="w-full h-32 p-3 resize-none border-b border-gray-300 focus:outline-none"
                                            placeholder="Enter job description"
                                            value={jobDescription}
                                            onChange={(e) => setJobDescription(e.target.value)}
                                            maxLength={500}
                                            aria-label="Job description"
                                        ></textarea>

                                        <div className="flex items-center justify-between px-3 py-2 text-gray-600 text-sm">
                                            <div className="flex gap-3">
                                                <button type="button" aria-label="Insert emoji">
                                                    <img src={smile} alt="emoji" />
                                                </button>
                                                <button type="button" aria-label="Bold text">
                                                    <img src={text} alt="bold" />
                                                </button>
                                                <button type="button" aria-label="Italic text">
                                                    <img src={textone} alt="italic" />
                                                </button>
                                                <button type="button" aria-label="List">
                                                    <img src={right} alt="list" />
                                                </button>
                                                <button type="button" aria-label="Numbered list">
                                                    <img src={left} alt="numbered list" />
                                                </button>
                                                <button type="button" aria-label="Insert link">
                                                    <img src={link} alt="link" />
                                                </button>
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
                                    <h1 className="text-xl font-semibold">Skills & experiences</h1>
                                    <p className="text-gray-300 mt-2">Outline the core responsibilities of the position.</p>
                                </div>
                                <div className="w-full m-2">
                                    <div className="border border-gray-300 rounded-md">
                                        <textarea
                                            className="w-full h-32 p-3 resize-none border-b border-gray-300 focus:outline-none"
                                            placeholder="Enter skills and experiences required"
                                            value={skillsAndExperience}
                                            onChange={(e) => setSkillsAndExperience(e.target.value)}
                                            maxLength={500}
                                            aria-label="Skills and experiences"
                                        ></textarea>

                                        <div className="flex items-center justify-between px-3 py-2 text-gray-600 text-sm">
                                            <div className="flex gap-3">
                                                <button type="button" aria-label="Insert emoji">
                                                    <img src={smile} alt="emoji" />
                                                </button>
                                                <button type="button" aria-label="Bold text">
                                                    <img src={text} alt="bold" />
                                                </button>
                                                <button type="button" aria-label="Italic text">
                                                    <img src={textone} alt="italic" />
                                                </button>
                                                <button type="button" aria-label="List">
                                                    <img src={right} alt="list" />
                                                </button>
                                                <button type="button" aria-label="Numbered list">
                                                    <img src={left} alt="numbered list" />
                                                </button>
                                                <button type="button" aria-label="Insert link">
                                                    <img src={link} alt="link" />
                                                </button>
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
                                    <h1 className="text-xl font-semibold">Responsibilities</h1>
                                    <p className="text-gray-300 mt-2">Outline the core skills and experiences of the position.</p>
                                </div>
                                <div className="w-full m-2">
                                    <div className="border border-gray-300 rounded-md">
                                        <textarea
                                            className="w-full h-32 p-3 resize-none border-b border-gray-300 focus:outline-none"
                                            placeholder="Enter job responsibilities"
                                            value={responsibilities}
                                            onChange={(e) => setResponsibilities(e.target.value)}
                                            maxLength={500}
                                            aria-label="Job responsibilities"
                                        ></textarea>

                                        <div className="flex items-center justify-between px-3 py-2 text-gray-600 text-sm">
                                            <div className="flex gap-3">
                                                <button type="button" aria-label="Insert emoji">
                                                    <img src={smile} alt="emoji" />
                                                </button>
                                                <button type="button" aria-label="Bold text">
                                                    <img src={text} alt="bold" />
                                                </button>
                                                <button type="button" aria-label="Italic text">
                                                    <img src={textone} alt="italic" />
                                                </button>
                                                <button type="button" aria-label="List">
                                                    <img src={right} alt="list" />
                                                </button>
                                                <button type="button" aria-label="Numbered list">
                                                    <img src={left} alt="numbered list" />
                                                </button>
                                                <button type="button" aria-label="Insert link">
                                                    <img src={link} alt="link" />
                                                </button>
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
                            
                        </div>
                    </div>
                
            </div>
        </div>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <div className="min-h-screen bg-white p-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center text-gray-600 hover:text-purple-600 mb-7 p-2 cursor-pointer">
          <FaArrowLeft className="mr-3" />
          <h2 className="text-2xl font-semibold text-gray-800">Post a Job</h2>
        </div>
        
        <div className="flex items-center mb-10 justify-evenly">
          <div className="flex items-center font-medium">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-2">
              <img src={bag} alt="Job Information" className="h-6" />
            </div>
            <div className="text-sm text-gray-300">
              <p>Step 1/3</p>
              <p>Job Information</p>
            </div>
          </div>
    
          <div className="flex items-center font-medium">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-2">
              <img src={note} alt="Job Description" className="h-6" />
            </div>
            <div className="text-sm text-gray-300">
              <p>Step 2/3</p>
              <p>Job Description</p>
            </div>
          </div>
    
          <div className="flex items-center font-medium">
            <div className="w-10 h-10 rounded-full bg-[#4640DE] flex items-center justify-center mr-2">
              <img src={bag} alt="Company Information" className="h-6" />
            </div>
            <div className="text-sm">
              <p className="text-[#4640DE]">Step 3/3</p>
              <p>Company Information</p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-semibold">Details</h1>
          <p className="text-gray-300">Add the description of the job, responsibilities and Skill & Experience.</p>
        </div>
        <hr className="text-gray-300 my-5" />

        
          <div className="p-6 bg-white rounded-lg">
            {/* Company Logo Section */}
            <div className="flex flex-col md:flex-row md:justify-between gap-6">
              <div className="md:w-1/3">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Company Logo
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  This image will be shown publicly as company logo.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-x-5 md:w-2/3">
                <img
                  src={companyLogo}
                  alt="Company Logo"
                  className="mb-2 w-20 h-20 object-contain"
                />
                <div>
                  <label htmlFor="websiteUrl" className="block text-gray-700 text-sm font-medium mb-1">
                    Company URL
                  </label>
                  <input
                    
                    type="url"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your logo url"
                    aria-label="logo URL"
                    onChange={(e)=>setCompanyLogo(e.target.value)}
                  />
                </div>
                {/* <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center mb-6 flex flex-col justify-center w-full md:w-64 h-40">
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
                    aria-label="Upload company logo"
                    onChange={(e)=>setCompanyLogo(e.target.value)}
                  />
                  <label htmlFor="logoUpload" className="cursor-pointer text-blue-500 mt-2">
                    Upload Logo
                  </label>
                </div> */}
              </div>
            </div>

            {/* Company Details Section */}
            <div className="flex flex-col md:flex-row md:justify-between gap-6 mt-10">
              <div className="md:w-1/3">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Company Details
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  Introduce your company core info quickly to users by filling up company
                  details
                </p>
              </div>
              <div className="space-y-4 md:w-2/3">
                <div>
                  <label htmlFor="companyName" className="block text-gray-700 text-sm font-medium mb-1">
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your company name"
                    aria-label="Company name"
                    onChange={(e)=>setCompanyName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="websiteUrl" className="block text-gray-700 text-sm font-medium mb-1">
                    Website URL
                  </label>
                  <input
                    id="websiteUrl"
                    type="url"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your company URL"
                    aria-label="Website URL"
                    onChange={(e)=>setWebsiteUrl(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-gray-700 text-sm font-medium mb-1">
                    Location
                  </label>
                  <input
                    id="location"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your location"
                    aria-label="Location"
                    onChange={(e)=>setLocation(e.target.value)}
                  />
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                  <div className="md:w-1/2">
                    <label htmlFor="employeeStrength" className="block text-gray-700 text-sm font-medium mb-1">
                      Employee Strength
                    </label>
                    <input
                      id="employeeStrength"
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Enter the employee strength"
                      aria-label="Employee strength"
                      onChange={(e)=>setEmployeeStrength(e.target.value)}
                    />
                  </div>
                  <div className="md:w-1/2">
                    <label htmlFor="industry" className="block text-gray-700 text-sm font-medium mb-1">
                      Industry
                    </label>
                    <input
                      id="industry"
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Belong to which industry"
                      aria-label="Industry"
                      onChange={(e)=>setIndustry(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Date Founded
                  </label>
                  <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                    <div className="md:w-1/3">
                      <input
                        id="foundedDay"
                        type="number"
                        min="1"
                        max="31"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Day"
                        aria-label="Day founded"
                        onChange={(e)=>setDay(e.target.value)}
                      />
                    </div>
                    <div className="md:w-1/3">
                      <input
                        id="foundedMonth"
                        type="number"
                        min="1"
                        max="12"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Month"
                        aria-label="Month founded"
                        onChange={(e)=>setMonth(e.target.value)}
                      />
                    </div>
                    <div className="md:w-1/3">
                      <input
                        id="foundedYear"
                        type="number"
                        min="1900"
                        max="2050"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Year"
                        aria-label="Year founded"
                        onChange={(e)=>setYear(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="technology" className="block text-gray-700 text-sm font-medium mb-1">
                    Technology
                  </label>
                  <input
                    id="technology"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Using which technology"
                    aria-label="Technology"
                    onChange={(e)=>setTechnology(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* About Company Section */}
            <div className="flex flex-col md:flex-row md:justify-between gap-6 mt-10">
              <div className="md:w-1/3">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  About Company
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  Brief description for your company. URLs are hyperlinked.
                </p>
              </div>
              <div className="md:w-2/3">
                <textarea
                  id="aboutCompany"
                  className="w-full p-2 border border-gray-300 rounded-md h-32"
                  placeholder="Enter description"
                  maxLength={250}
                  value={aboutCompany}
                  onChange={(e) => setAboutCompany(e.target.value)}
                  aria-label="About company"
                ></textarea>
                <p className="text-gray-500 text-xs mt-1">
                  Maximum 250 characters {charCount}/250
                </p>
              </div>
            </div>

            
          </div>
      </div>
      
    </div>
          </>
        )}

        {/* NAVIGATION BUTTONS */}
        <div className="flex justify-between mt-6">
          {step > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
            >
              Back
            </button>
          ) : (
            <div />
          )}
          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-4 py-2 bg-[#4640DE] text-white rounded-md"

            >
              Next
            </button>
          ) : (
             <button
               
               onClick={submit}
               className="px-4 py-2 bg-green-600 text-white rounded-md"
               disabled={loading}
               
               
             >
               {loading ? (
    <FaSpinner className="animate-spin h-5 w-5" />
  ) : (
    "Submit"
  )}
             </button>
          )}
        </div>
       
      </div>
      
    </div>
  );
};

export default PostJob;

