import React, { useState, useEffect } from 'react';
import { Eye, ChevronDown, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import ApplicantView from './ApplicantView';
import axios from 'axios';
export default function CompanyJobListing() {
  const [jobListings, setJobListings] = useState([
    {
      id: 1,
      role: "Senior Designer",
      status: "Open",
      datePosted: "15 March 2025",
      dueDate: "10 April 2025",
      jobType: "Fulltime",
      applicants: 19,
      needs: "05",
      // Added detailed information for JobDetails
      description: "As a Senior Designer, you will work within a Brand Delivery team based with UX, engineering, product and data talent. You will help the team design beautiful interfaces that foster alliance and loyalty to our clients. We work with a number of Tier 1 clients in banking and insurance.",
      keyResponsibilities: [
        "Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.",
        "Work with user experience designers to implement elegant solutions for complex design challenges.",
        "Communicate your design thinking and solutions to cross-functional stakeholders.",
        "Collaborate with designers, developers, product managers to optimize designs.",
        "Create and iterate on assets as projects evolve and requirements change.",
        "Participate in design critique and share your knowledge with the team.",
        "Maintain quality of design implementation throughout the product development lifecycle."
      ],
      skillsExperience: [
        "You must have at least 5 years' experience working as a Designer.",
        "You have experience using Sketch and Invision or Figma/XD.",
        "You have some previous experience working in an agile environment - Think lean when coding.",
        "You are familiar using a range of software to cover workflow."
      ],
      overview: {
        datePosted: "Posted 1 hour ago",
        expirationDate: "April 25, 2025",
        location: "New York, USA",
        hours: "40h / week",
        salary: "$75K - $95K"
      },
      categories: ["Design", "Leadership"],
      requiredSkills: ["Time Management", "Typography", "Creativity", "Design Principles", "Brand Identity", "Team Leadership"]
    },
    {
      id: 2,
      role: "UI/UX Designer Intern",
      status: "Open",
      datePosted: "10 March 2025",
      dueDate: "03 April 2025",
      jobType: "Freelancer",
      applicants: 200,
      needs: "10",
      // Added detailed information for JobDetails
      description: "As a UI/UX Designer Intern, you will assist our design team in creating user-friendly interfaces and experiences for our digital products. This is a great opportunity to gain hands-on experience in a fast-paced environment while learning from experienced designers.",
      keyResponsibilities: [
        "Assist in creating wireframes, mockups, and prototypes for web and mobile applications.",
        "Participate in user research and testing sessions.",
        "Help implement design systems and guidelines.",
        "Collaborate with developers to ensure proper implementation of designs.",
        "Create visual assets and icons as needed.",
        "Assist with documenting design decisions and processes.",
        "Contribute ideas during brainstorming sessions."
      ],
      skillsExperience: [
        "Currently pursuing a degree in Design, HCI, or related field.",
        "Basic knowledge of design tools such as Figma, Adobe XD, or Sketch.",
        "Understanding of basic design principles and user-centered design.",
        "Eagerness to learn and grow as a designer."
      ],
      overview: {
        datePosted: "Posted 6 days ago",
        expirationDate: "April 3, 2025",
        location: "Remote",
        hours: "20h / week",
        salary: "$15 - $20 per hour"
      },
      categories: ["Design", "UX/UI"],
      requiredSkills: ["UI Design", "Wireframing", "Prototyping", "User Research", "Visual Design"]
    },
    {
      id: 3,
      role: "Content Creator",
      status: "Closed",
      datePosted: "15 March 2025",
      dueDate: "10 April 2025",
      jobType: "Fulltime",
      applicants: 100,
      needs: "02",
      // Added detailed information for JobDetails
      description: "We're looking for a creative Content Creator to produce engaging content across our digital channels. You'll work with our marketing team to develop and implement content strategies that align with our brand voice and business goals.",
      keyResponsibilities: [
        "Create compelling written, visual, and video content for social media, blog, and website.",
        "Maintain a consistent publishing schedule across all platforms.",
        "Analyze content performance and optimize based on data insights.",
        "Stay current with content trends and best practices.",
        "Collaborate with designers, marketers, and product teams.",
        "Develop and maintain a content calendar.",
        "Ensure brand consistency across all content."
      ],
      skillsExperience: [
        "3+ years of experience in content creation or related field.",
        "Excellent writing and editing skills.",
        "Experience with social media management tools.",
        "Basic knowledge of SEO principles.",
        "Proficiency in photo and video editing software."
      ],
      overview: {
        datePosted: "Posted 20 days ago",
        expirationDate: "April 10, 2025",
        location: "Chicago, IL",
        hours: "40h / week",
        salary: "$55K - $70K"
      },
      categories: ["Marketing", "Content"],
      requiredSkills: ["Copywriting", "Social Media", "Content Strategy", "SEO", "Editing"]
    },
    {
      id: 4,
      role: "Business Analyst",
      status: "Open",
      datePosted: "15 March 2025",
      dueDate: "10 April 2025",
      jobType: "Part Time",
      applicants: 50,
      needs: "07",
      // Added detailed information for JobDetails
      description: "We are seeking a part-time Business Analyst to help our organization optimize processes and improve efficiency. You will work closely with stakeholders to identify business needs and recommend solutions that drive value.",
      keyResponsibilities: [
        "Gather and document business requirements from stakeholders.",
        "Analyze current business processes and identify areas for improvement.",
        "Create detailed functional specifications for development teams.",
        "Facilitate workshops and meetings to drive decision-making.",
        "Test new systems and processes before implementation.",
        "Provide training and support to end-users.",
        "Monitor and report on the success of implemented solutions."
      ],
      skillsExperience: [
        "2+ years of experience in business analysis or similar role.",
        "Strong analytical and problem-solving skills.",
        "Experience with requirements gathering techniques.",
        "Knowledge of process modeling and documentation tools.",
        "Excellent communication and presentation skills."
      ],
      overview: {
        datePosted: "Posted 2 weeks ago",
        expirationDate: "April 10, 2025",
        location: "Boston, MA",
        hours: "20h / week",
        salary: "$40K - $50K"
      },
      categories: ["Business", "Analysis"],
      requiredSkills: ["Requirements Analysis", "Process Modeling", "Data Analysis", "Documentation", "Communication"]
    },
    {
      id: 5,
      role: "Flutter Developer",
      status: "Closed",
      datePosted: "15 March 2025",
      dueDate: "10 April 2025",
      jobType: "Fulltime",
      applicants: 400,
      needs: "12",
      // Added detailed information for JobDetails
      description: "We're looking for a skilled Flutter Developer to build and maintain cross-platform mobile applications. You will work with our development team to create seamless and engaging user experiences across iOS and Android platforms.",
      keyResponsibilities: [
        "Develop high-quality mobile applications using Flutter framework.",
        "Collaborate with cross-functional teams to define, design, and ship new features.",
        "Ensure the performance, quality, and responsiveness of applications.",
        "Identify and fix bugs and performance bottlenecks.",
        "Maintain code quality, organization, and automatization.",
        "Stay updated with the latest Flutter developments and best practices.",
        "Implement automated testing to ensure application quality."
      ],
      skillsExperience: [
        "2+ years of experience with Flutter development.",
        "Strong understanding of Dart programming language.",
        "Experience with RESTful APIs and third-party libraries.",
        "Familiarity with state management solutions (Provider, Bloc, Redux).",
        "Knowledge of both iOS and Android design principles."
      ],
      overview: {
        datePosted: "Posted 3 weeks ago",
        expirationDate: "April 10, 2025",
        location: "San Francisco, CA",
        hours: "40h / week",
        salary: "$90K - $120K"
      },
      categories: ["Development", "Mobile"],
      requiredSkills: ["Flutter", "Dart", "Mobile Development", "State Management", "API Integration"]
    },
    {
      id: 6,
      role: "Frontend Developer",
      status: "Open",
      datePosted: "15 March 2025",
      dueDate: "10 April 2025",
      jobType: "Freelancer",
      applicants: 10,
      needs: "01",
      // Added detailed information for JobDetails
      description: "We are seeking a skilled Frontend Developer to join our team on a freelance basis. You will be responsible for implementing visual elements and user interactions that users see and interact with in our web applications.",
      keyResponsibilities: [
        "Develop new user-facing features using React.js and related technologies.",
        "Build reusable components and libraries for future use.",
        "Translate designs and wireframes into high-quality code.",
        "Optimize applications for maximum speed and scalability.",
        "Collaborate with backend developers and designers.",
        "Ensure the technical feasibility of UI/UX designs.",
        "Stay updated on emerging frontend technologies."
      ],
      skillsExperience: [
        "3+ years of experience in frontend development.",
        "Proficiency with React.js and its core principles.",
        "Strong knowledge of HTML5, CSS3, and JavaScript.",
        "Experience with responsive design and cross-browser compatibility.",
        "Familiarity with frontend build tools and version control."
      ],
      overview: {
        datePosted: "Posted 5 days ago",
        expirationDate: "April 10, 2025",
        location: "Remote",
        hours: "Variable",
        salary: "$45 - $65 per hour"
      },
      categories: ["Development", "Frontend"],
      requiredSkills: ["React.js", "JavaScript", "CSS3", "HTML5", "Responsive Design"]
    },
    {
      id: 7,
      role: "PHP Developer",
      status: "Closed",
      datePosted: "15 March 2025",
      dueDate: "10 April 2025",
      jobType: "Fulltime",
      applicants: 20,
      needs: "06",
      // Added detailed information for JobDetails
      description: "We are looking for a PHP Developer to join our backend team. You will be responsible for developing and maintaining our server-side applications, ensuring high performance and responsiveness to requests from the front-end.",
      keyResponsibilities: [
        "Write clean, well-designed, and efficient code using PHP programming practices.",
        "Develop and maintain database structures and query optimizations.",
        "Implement security and data protection measures.",
        "Integrate data storage solutions including databases, key-value stores, blob stores, etc.",
        "Collaborate with frontend developers to integrate user-facing elements.",
        "Troubleshoot, debug and upgrade existing systems.",
        "Create and maintain software documentation."
      ],
      skillsExperience: [
        "3+ years of experience in PHP development.",
        "Strong knowledge of PHP frameworks (Laravel, Symfony, etc.).",
        "Experience with MySQL or PostgreSQL database design.",
        "Understanding of MVC design patterns.",
        "Familiarity with version control tools (Git)."
      ],
      overview: {
        datePosted: "Posted 2 weeks ago",
        expirationDate: "April 10, 2025",
        location: "Austin, TX",
        hours: "40h / week",
        salary: "$70K - $90K"
      },
      categories: ["Development", "Backend"],
      requiredSkills: ["PHP", "MySQL", "Laravel", "API Development", "MVC"]
    },
    {
      id: 8,
      role: "Mobile App Development",
      status: "Open",
      datePosted: "15 March 2025",
      dueDate: "10 April 2025",
      jobType: "Part Time",
      applicants: 30,
      needs: "03",
      // Added detailed information for JobDetails
      description: "We're seeking a talented Mobile App Developer to work part-time on our innovative applications. You will be responsible for developing and maintaining mobile applications for iOS and Android platforms.",
      keyResponsibilities: [
        "Design and build advanced applications for both iOS and Android platforms.",
        "Collaborate with cross-functional teams to define, design, and ship new features.",
        "Work with outside data sources and APIs.",
        "Unit-test code for robustness, including edge cases, usability, and general reliability.",
        "Fix bugs and performance problems.",
        "Continuously discover, evaluate, and implement new technologies.",
        "Help maintain code quality, organization, and automatization."
      ],
      skillsExperience: [
        "2+ years of experience in native mobile app development.",
        "Proficiency with Swift for iOS and/or Kotlin for Android.",
        "Experience with RESTful APIs and third-party libraries.",
        "Understanding of the full mobile development life cycle.",
        "Familiarity with mobile UI design principles."
      ],
      overview: {
        datePosted: "Posted 1 week ago",
        expirationDate: "April 10, 2025",
        location: "Denver, CO",
        hours: "20h / week",
        salary: "$40 - $55 per hour"
      },
      categories: ["Development", "Mobile"],
      requiredSkills: ["iOS Development", "Android Development", "Swift", "Kotlin", "Mobile UI/UX"]
    }
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [dateRange, setDateRange] = useState("Feb 19 - Mar 25");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [sortOption, setSortOption] = useState("Latest");
  const [selectedJob, setSelectedJob] = useState(null);
  const [job, setpost] = useState('')

  const sortOptions = ["Latest", "Oldest", "Most Applicants", "Fewest Applicants", "Alphabetical"];

  const getStatusStyle = (status) => {
    return status === "Open" 
      ? "text-green-500 border border-green-200 bg-green-50" 
      : "text-red-500 border border-red-200 bg-red-50";
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) return;
  
    const userInfo = JSON.parse(user);
    const user_email = userInfo.email;
  
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/job/jobpost`)
      .then((response) => {
        const jobs = response.data;
        console.log(jobs);
        {
          jobs.map((job)=>{ (job.postedBy)})
        }
        
        
      })
      .catch((err) => console.error("❌ Error fetching jobs:", err));
  }, []);

  

  const getJobTypeStyle = (type) => {
    switch(type) {
      case "Fulltime":
        return "text-indigo-600 bg-indigo-100 border border-indigo-200";
      case "Freelancer":
        return "text-purple-600 bg-purple-100 border border-purple-200";
      case "Part Time":
        return "text-blue-600 bg-blue-100 border border-blue-200";
      default:
        return "text-gray-600 bg-gray-100 border border-gray-200";
    }
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    setShowSortOptions(false);
    
    // Implement sort logic
    let sortedListings = [...jobListings];
    
    switch(option) {
      case "Latest":
        sortedListings.sort((a, b) => new Date(b.datePosted) - new Date(a.datePosted));
        break;
      case "Oldest":
        sortedListings.sort((a, b) => new Date(a.datePosted) - new Date(b.datePosted));
        break;
      case "Most Applicants":
        sortedListings.sort((a, b) => b.applicants - a.applicants);
        break;
      case "Fewest Applicants":
        sortedListings.sort((a, b) => a.applicants - b.applicants);
        break;
      case "Alphabetical":
        sortedListings.sort((a, b) => a.role.localeCompare(b.role));
        break;
      default:
        break;
    }
    
    setJobListings(sortedListings);
  };

  // Calendar functionality simulation
  const handleDateChange = (newRange) => {
    setDateRange(newRange);
    setShowDatePicker(false);
    // In a real implementation, you would filter jobs based on the date range
  };

  // View applicants for a job
  const handleViewApplicants = (job) => {
    setSelectedJob(job);
  };

  // Back to job listing
  const handleBackToListing = () => {
    setSelectedJob(null);
  };

  // If a job is selected, show the applicant view component
  if (selectedJob) {
    return <ApplicantView job={selectedJob} onBack={handleBackToListing} />;
  }

  return (
    <div className="w-full bg-white p-4">
      <div className="flex justify-between items-center py-4">
        <div className="pb-4">
          <h2 className="text-xl font-semibold text-gray-800">Job Listing</h2>
          <p className="text-sm text-gray-500">Here is your jobs listing status from {dateRange}.</p>
        </div>
        <div className="flex items-center space-x-2">
          {/* Sort By Dropdown */}
          <div className="relative">
            <button 
              className="flex items-center space-x-2 px-4 py-2 border rounded-md bg-white text-sm"
              onClick={() => setShowSortOptions(!showSortOptions)}
            >
              <span>Sort by</span>
              <ChevronDown size={16} />
            </button>
            
            {showSortOptions && (
              <div className="absolute top-full left-0 mt-1 bg-white border rounded-md shadow-lg z-10 w-48">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                    onClick={() => handleSortChange(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Date Range Picker */}
          <div className="relative">
            <button 
              className="flex items-center space-x-2 px-4 py-2 border rounded-md bg-white text-sm"
              onClick={() => setShowDatePicker(!showDatePicker)}
            >
              <Calendar size={16} />
              <span>{dateRange}</span>
            </button>
            
            {showDatePicker && (
              <div className="absolute top-full left-0 mt-1 bg-white border rounded-md shadow-lg z-10 p-4">
                <div className="flex flex-col space-y-2">
                  <button 
                    className="text-left hover:bg-gray-50 p-2 rounded"
                    onClick={() => handleDateChange("Jan 1 - Jan 31")}
                  >
                    Jan 1 - Jan 31
                  </button>
                  <button 
                    className="text-left hover:bg-gray-50 p-2 rounded"
                    onClick={() => handleDateChange("Feb 1 - Feb 28")}
                  >
                    Feb 1 - Feb 28
                  </button>
                  <button 
                    className="text-left hover:bg-gray-50 p-2 rounded"
                    onClick={() => handleDateChange("Feb 19 - Mar 25")}
                  >
                    Feb 19 - Mar 25
                  </button>
                  <button 
                    className="text-left hover:bg-gray-50 p-2 rounded"
                    onClick={() => handleDateChange("Mar 1 - Mar 31")}
                  >
                    Mar 1 - Mar 31
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Job Listings Table */}
      <div className="rounded-lg border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-7 gap-4 py-3 px-4 text-sm text-gray-500 border-b border-gray-200 bg-gray-50">
          <div className="col-span-1">Roles</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-1">Date Posted</div>
          <div className="col-span-1">Due Date</div>
          <div className="col-span-1">Job Type</div>
          <div className="col-span-1 text-center">Applicants</div>
          <div className="col-span-1 text-center">Needs</div>
        </div>

        {jobListings.map((job) => (
          <div key={job.id} className="grid grid-cols-7 gap-4 py-6 px-4 border-b border-gray-200 items-center text-sm hover:bg-gray-50">
            <div className="col-span-1 font-medium text-gray-800">{job.role}</div>
            <div className="col-span-1">
              <span className={`px-4 py-1 rounded-full text-xs ${getStatusStyle(job.status)}`}>
                {job.status}
              </span>
            </div>
            <div className="col-span-1 text-gray-600">{job.datePosted}</div>
            <div className="col-span-1 text-gray-600">{job.dueDate}</div>
            <div className="col-span-1">
              <span className={`px-4 py-1 rounded-full text-xs ${getJobTypeStyle(job.jobType)}`}>
                {job.jobType}
              </span>
            </div>
            <div className="col-span-1 text-center">{job.applicants}</div>
            <div className="col-span-1 flex items-center justify-between">
              <span className="text-gray-400 mx-auto">{job.needs}</span>
              <button 
                className="text-blue-500 hover:text-blue-700"
                onClick={() => handleViewApplicants(job)}
                aria-label={`View applicants for ${job.role}`}
              >
                <Eye size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center mt-8 space-x-1">
        <button className="p-1 rounded-md hover:bg-gray-100">
          <ChevronLeft size={20} />
        </button>
        
        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-blue-600 text-white">
          1
        </button>
        
        <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100">
          2
        </button>
        
        <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100">
          3
        </button>
        
        <span className="mx-1">...</span>
        
        <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100">
          7
        </button>
        
        <button className="p-1 rounded-md hover:bg-gray-100">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
