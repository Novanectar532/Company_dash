import React, { useState } from "react";
import { Search, MapPin, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SearchImage from "../../assets/image/image12.png";

const JobSearchPage = () => {
  const navigate = useNavigate();
  
  // Job data
  const jobData = [
    {
      id: 1,
      title: "Brand Designer",
      company: "Zend",
      location: "San Francisco, USA",
      type: "Full Time",
      category: "Designer",
      logo: "ZP",
      capacity: 400,
      applications: 250,
      color: "bg-green-500"
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Twitter",
      location: "San Francisco, USA",
      type: "Full Time",
      category: "Designer",
      logo: "TW",
      capacity: 400,
      applications: 250,
      color: "bg-blue-500"
    },
    {
      id: 3,
      title: "Customer Manager",
      company: "Canva",
      location: "San Francisco, USA",
      type: "Full Time",
      category: "Sales",
      logo: "CA",
      capacity: 400,
      applications: 250,
      color: "bg-teal-500"
    },
    {
      id: 4,
      title: "Brand Designer",
      company: "Zend",
      location: "San Francisco, USA",
      type: "Full Time",
      category: "Designer",
      logo: "ZP",
      capacity: 400,
      applications: 250,
      color: "bg-green-500"
    },
    {
      id: 5,
      title: "UI/UX Designer",
      company: "Twitter",
      location: "San Francisco, USA",
      type: "Full Time",
      category: "Designer",
      logo: "TW",
      capacity: 400,
      applications: 250,
      color: "bg-blue-500"
    },
    {
      id: 6,
      title: "Customer Manager",
      company: "Canva",
      location: "San Francisco, USA",
      type: "Full Time",
      category: "Sales",
      logo: "CA",
      capacity: 400,
      applications: 250,
      color: "bg-teal-500"
    },
  ];

  // Filter configuration
  const filterConfigs = {
    jobTypes: [
      { id: "fullTime", label: "Full Time", count: 56 },
      { id: "partTime", label: "Part Time", count: 24 },
      { id: "remote", label: "Remote", count: 12 },
      { id: "internship", label: "Internship", count: 6 }
    ],
    categories: [
      { id: "design", label: "Design", count: 12 },
      { id: "sales", label: "Sales", count: 8 },
      { id: "marketing", label: "Marketing", count: 10 },
      { id: "business", label: "Business", count: 14 },
      { id: "humanResources", label: "Human Resources", count: 15 },
      { id: "engineering", label: "Engineering", count: 14 },
      { id: "technology", label: "Technology", count: 26 }
    ],
    experience: [
      { id: "entry", label: "Entry Level" },
      { id: "year1", label: "1 Year" },
      { id: "year2", label: "2 Years" },
      { id: "year5", label: "5+ Years" },
      { id: "year10", label: "10+ Years" }
    ],
    salaryRange: [
      { id: "below2k", label: "$0 - $2,000" },
      { id: "from2kTo4k", label: "$2,000 - $4,000" },
      { id: "from4kTo6k", label: "$4,000 - $6,000" },
      { id: "from6kTo8k", label: "$6,000 - $8,000" },
      { id: "from8kTo10k", label: "$8,000 - $10,000" },
      { id: "above10k", label: "$10,000 and above" }
    ]
  };

  // State for filters and dropdown states
  const [filters, setFilters] = useState({
    jobTypes: {},
    categories: {},
    experience: {},
    salaryRange: {}
  });

  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Select Location");
  const [selectedCategory, setSelectedCategory] = useState("Select Category");

  // Toggle filter function
  const toggleFilter = (category, id) => {
    setFilters(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [id]: !prev[category][id]
      }
    }));
  };

  // Handler for Apply Now button
  const handleApplyNow = (job) => {
    // Navigate to job application page with job details
    navigate(`/job/${job.id}`, { state: { job } });
  };

  // Locations for dropdown
  const locations = ["New York", "San Francisco", "Los Angeles", "Chicago", "Austin", "Remote"];
  
  // Categories for dropdown
  const categories = ["Design", "Marketing", "Engineering", "Sales", "Business", "Human Resources"];

  // Search form component - Updated to match Figma
  const SearchForm = () => (
    <div className="bg-white rounded-lg p-4 shadow-lg max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Keyword Search */}
        <div className="flex items-center rounded-lg border border-gray-200 px-4 py-3 flex-1">
          <Search className="text-gray-400 h-5 w-5 mr-2" />
          <input
            type="text"
            placeholder="Search for keywords"
            className="bg-transparent w-full outline-none text-gray-700 text-sm"
          />
        </div>
        
        {/* Location Dropdown */}
        <div className="relative flex items-center rounded-lg border border-gray-200 px-4 py-3 flex-1">
          <MapPin className="text-gray-400 h-5 w-5 mr-2" />
          <div 
            className="flex justify-between items-center w-full cursor-pointer"
            onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
          >
            <span className="text-sm text-gray-700">{selectedLocation}</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-4 w-4 text-gray-500 transition-transform ${isLocationDropdownOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          {/* Location Dropdown Menu */}
          {isLocationDropdownOpen && (
            <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              {locations.map((location, index) => (
                <div 
                  key={index} 
                  className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer text-sm"
                  onClick={() => {
                    setSelectedLocation(location);
                    setIsLocationDropdownOpen(false);
                  }}
                >
                  {location}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Category Dropdown */}
        <div className="relative flex items-center rounded-lg border border-gray-200 px-4 py-3 flex-1">
          <Briefcase className="text-gray-400 h-5 w-5 mr-2" />
          <div 
            className="flex justify-between items-center w-full cursor-pointer"
            onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
          >
            <span className="text-sm text-gray-700">{selectedCategory}</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-4 w-4 text-gray-500 transition-transform ${isCategoryDropdownOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          {/* Category Dropdown Menu */}
          {isCategoryDropdownOpen && (
            <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              {categories.map((category, index) => (
                <div 
                  key={index} 
                  className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer text-sm"
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsCategoryDropdownOpen(false);
                  }}
                >
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Search Button */}
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-lg font-medium text-sm">
          Search
        </button>
      </div>
    </div>
  );

  // Filter component
  const FilterSection = ({ title, items, category, collapsible = true }) => (
    <div className="bg-white rounded-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        {collapsible && (
          <button className="text-sm text-gray-500">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg> */}
          </button>
        )}
      </div>
      <div className="space-y-3">
        {items.map(item => (
          <div key={item.id} className="flex items-center">
            <input
              type="checkbox"
              id={item.id}
              className="w-4 h-4 text-indigo-600 rounded"
              checked={filters[category][item.id] || false}
              onChange={() => toggleFilter(category, item.id)}
            />
            <label htmlFor={item.id} className="ml-2 text-sm text-gray-700">
              {item.label}{item.count ? ` (${item.count})` : ''}
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  // Job card component
  const JobCard = ({ job }) => (
    <div className="border border-gray-200 rounded-lg p-6 mb-4 hover:border-indigo-500 hover:shadow-md transition-all">
      <div className="flex justify-between">
        <div className="flex">
          {/* Company Logo */}
          <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
            {job.logo.startsWith("http") ? (
              <img src={job.logo} alt={`${job.company} logo`} className="w-full h-full object-cover" />
            ) : (
              <div className={`w-full h-full flex items-center justify-center text-white text-xl font-bold ${job.color || "bg-blue-500"}`}>
                {job.logo}
              </div>
            )}
          </div>
          
          {/* Job details */}
          <div className="ml-4">
            <h3 className="font-semibold text-lg text-gray-900">{job.title}</h3>
            <p className="text-sm text-gray-500 mt-1">
              {job.company} • {job.location}
            </p>
            
            {/* Tags section */}
            <div className="flex mt-4 gap-2">
              <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                Full Time
              </span>
              <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full border border-orange-200">
                {job.category} <span className="ml-1">▼</span>
              </span>
            </div>
          </div>
        </div>
        
        {/* Apply button */}
        <div className="flex flex-col items-end justify-between">
          <button 
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg text-sm font-medium"
            onClick={() => handleApplyNow(job)}
          >
            Apply Now
          </button>
          
          {/* Application count */}
          <p className="text-sm text-gray-500 mt-auto">
            {job.applications} applied <span className="text-gray-400">of {job.capacity} capacity</span>
          </p>
        </div>
      </div>
    </div>
  );

  // Pagination component
  const Pagination = () => {
    const pages = [1, 2, 3, 4, 5];
    return (
      <div className="mt-8 flex justify-center">
        <nav className="inline-flex items-center">
          <button className="px-2 py-2 rounded-l border text-indigo-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          {pages.map(page => (
            <button
              key={page}
              className={`px-4 py-2 border-t border-b ${
                page === 1 ? "bg-indigo-600 text-white" : "text-gray-700"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="px-2 py-2 rounded-r border text-indigo-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </nav>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="text-white py-12 relative" style={{ backgroundImage: `url(${SearchImage})`, backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">Find your Dream Job</h1>
            <p className="text-lg mb-8">
              Find your next career at companies like HubSpot, Nike, and many more.
            </p>
            <SearchForm />
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar - Filters */}
          <div className="w-full md:w-64 lg:w-72 pr-0 md:pr-8 mb-8 md:mb-0">
            <FilterSection 
              title="Type of Employment" 
              items={filterConfigs.jobTypes} 
              category="jobTypes" 
              collapsible={false} 
            />
            <FilterSection 
              title="Categories" 
              items={filterConfigs.categories} 
              category="categories" 
            />
            <FilterSection 
              title="Experience Level" 
              items={filterConfigs.experience} 
              category="experience" 
            />
            <FilterSection 
              title="Salary Range" 
              items={filterConfigs.salaryRange} 
              category="salaryRange" 
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg  mb-6">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">All Jobs</h2>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Sort by:</span>
                    <select className="border rounded p-1 text-sm">
                      <option>default</option>
                      <option>newest</option>
                      <option>oldest</option>
                    </select>
                  </div>
                </div>

                {/* Job Cards */}
                <div className="space-y-6">
                  {jobData.map(job => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>

                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearchPage;