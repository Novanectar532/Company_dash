import React from "react";

const DashJobCard = ({ logo, jobTitle, company, location, jobType, tags, applied, capacity }) => {
  return (
    <div className="p-4  w-full   shadow-md rounded-lg   border border-gray-200">
     
      <div className="flex justify-between items-center">
        <img
          src={logo}
          alt="Company Logo"
          className="w-10 h-10 object-contain"
        />
        <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
          {jobType}
        </span>
      </div>

    
      <h2 className="text-lg font-semibold mt-2">{jobTitle}</h2>
      <p className="text-gray-500 text-sm">{company} • {location}</p>

     
      <div className="flex gap-2 mt-3">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 border rounded-full text-sm text-blue-600 border-blue-300">
            {tag}
          </span>
        ))}
      </div>

      
      <div className="mt-4">
        <div className="relative w-full h-2 bg-gray-200 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
            style={{ width: `${(applied / capacity) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm mt-1 text-gray-600">
          <span className="font-bold">{applied} applied</span> of {capacity} capacity
        </p>
      </div>
    </div>
  );
};

export default DashJobCard;
