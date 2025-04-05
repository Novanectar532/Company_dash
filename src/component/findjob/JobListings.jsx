import React from "react";
import { FaArrowRight } from "react-icons/fa";
import image1 from "../../assets/image/logo.png";
import { MapPin, Clock } from "react-feather";

const jobs = [
  {
    id: 1,
    company: "NovaNecter Services PVT. LTD.",
    position: "B.D.E (Business Development Executive)",
    description: "It is a long established fact that a reader of a page when looking at its layout.",
    type: "Full Time",
    daysAgo: "2 Day ago",
    location: "Dehradun",
    experience: "Fresher or 1 Year Experience",
    logo: image1,
  },
  {
    id: 2,
    company: "NovaNecter Services PVT. LTD.",
    position: "I.T Sales",
    description: "It is a long established fact that a reader of a page when looking at its layout.",
    type: "Full Time",
    daysAgo: "2 Day ago",
    location: "Dehradun",
    experience: "Fresher or 1 Year Experience",
    logo: image1,
  },
  {
    id: 3,
    company: "NovaNecter Services PVT. LTD.",
    position: "UI/UX Designer",
    description: "It is a long established fact that a reader of a page when looking at its layout.",
    type: "Full Time",
    daysAgo: "2 Day ago",
    location: "Dehradun",
    experience: "Fresher or 1 Year Experience",
    logo: image1,
  },
  {
    id: 4,
    position: "Graphic Designer",
    company: "NovaNecter Services PVT. LTD.",
    description: "It is a long established fact that a reader of a page when looking at its layout.",
    type: "Full Time",
    daysAgo: "2 Day ago",
    location: "Dehradun",
    experience: "Fresher or 1 Year Experience",
    logo: image1,
  },
  {
    id: 5,
    position: "Social Media Executive",
    company: "NovaNecter Services PVT. LTD.",
    description: "It is a long established fact that a reader of a page when looking at its layout.",
    type: "Full Time",
    daysAgo: "2 Day ago",
    location: "Dehradun",
    experience: "Fresher or 1 Year Experience",
    logo: image1,
  },
  {
    id: 6,
    company: "NovaNecter Services PVT. LTD.",
    position: "Video Editor",
    description: "It is a long established fact that a reader of a page when looking at its layout.",
    type: "Full Time",
    daysAgo: "2 Day ago",
    location: "Dehradun",
    experience: "Fresher or 1 Year Experience",
    logo: image1,
  },
];

const JobListings = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        <div>
          <h2 className="text-4xl font-bold">New Job Offers</h2>
          <p className="text-gray-500">More Than +500 Job Offers Every Day</p>
        </div>
        <a href="#" className="text-blue-600 flex items-center gap-2 hover:underline">
          Show all jobs <FaArrowRight />
        </a>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-transform transform hover:-translate-y-2"
          >
            <div className="flex justify-between items-center">
              <span className="bg-blue-50 text-blue-600 px-3 py-1 text-sm rounded">{job.type}</span>
              <span className="text-gray-400 text-sm">{job.daysAgo}</span>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <img src={job.logo} alt={job.company} className="w-14 h-14 rounded-full" />
              <div>
                <h3 className="text-xl font-bold">{job.position}</h3>
                <p className="text-sm text-gray-500">{job.company}</p>
              </div>
            </div>

            <div className="flex items-center text-gray-600 mt-4">
              <MapPin size={18} className="mr-2" />
              <span className="text-sm">{job.location}</span>
            </div>

            <div className="flex items-center text-gray-600 mt-2">
              <Clock size={18} className="mr-2" />
              <span className="text-sm">{job.experience}</span>
            </div>

            <p className="text-sm text-gray-500 mt-4">{job.description}</p>

            <div className="flex gap-4 mt-6">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition w-full">
                Apply Now
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition w-full">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobListings;

