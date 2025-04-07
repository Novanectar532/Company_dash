import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import bag from "../../assets/image/bag.png";
import note from "../../assets/image/note.png";
import { useNavigate } from "react-router-dom";

const Step1 = () => {
  const [sallery, setSallery] = useState(0);

  const submit = (e) => {
    e.preventDefault();
    console.log("sallery :", sallery);
    //    console.log("skills :" , setSkills)
  };

  const [skills, setSkills] = useState(["JavaScript", "React", "Node.js"]);
  const [input, setInput] = useState("");

  const handleAddSkill = () => {
    if (input.trim() !== "" && !skills.includes(input.trim())) {
      setSkills([...skills, input.trim()]);
      console.log(setSkills);
      setInput("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const navigate = useNavigate();

  const next = () => {
    navigate("/jobpost/step2");
  };
  return (
    <>
      <div className="min-h-screen bg-white p-8">
        <form className=" mx-auto" onSubmit={submit}>
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
                      className="form-checkbox text-purple-600"
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
            <p className=" font-semibold text-right">Selected Salary: ₹ {sallery}</p>

            <div className="mb-6 mt-5 flex ">
              <label className=" mb-1 w-100">
                <p className=" font-semibold">Categories </p>
                <p className="text-gray-300">
                  You can select multiple job categories
                </p>
              </label>
              <select className="w-150 border border-gray-300 p-3 rounded-md text-gray-600">
                <option>Select Job Categories</option>
                <option>Select Job Categories</option>
                <option>Select Job Categories</option>
                <option>Select Job Categories</option>
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
                  {skills.map((skill, index) => (
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

            <div className="text-right">
              <button
                className="bg-[#4640DE] text-white px-6 py-2 rounded-md"
                type="submit"
                onClick={next}
              >
                Next Step
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Step1;
