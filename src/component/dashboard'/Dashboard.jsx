import React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import logo from '../../assets/image/Company_Logo.png';
import PersnolProfile from "./PersonalProfile"
import {
  FaUser,
  FaCalendarAlt, FaEnvelope, FaEye, FaList, FaBell,
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import DashJobCard from "./DashJobCard";
const jobData = [
  {
    logo: logo,
    jobTitle: "Sales Analyst",
    company: "Nomad",
    location: "Paris, France",
    jobType: "Full-Time",
    tags: ["Marketing", "Design"],
    applied: 15,
    capacity: 50,
  },
  {
    logo: logo,
    jobTitle: "Product Manager",
    company: "Google",
    location: "New York, USA",
    jobType: "Part-Time",
    tags: ["Management", "Tech"],
    applied: 20,
    capacity: 60,
  },
  {
    logo: logo,
    jobTitle: "UX Designer",
    company: "Facebook",
    location: "London, UK",
    jobType: "Full-Time",
    tags: ["UI/UX", "Design"],
    applied: 10,
    capacity: 40,
  },
  {
    logo: logo,
    jobTitle: "UX Designer",
    company: "Facebook",
    location: "London, UK",
    jobType: "Full-Time",
    tags: ["UI/UX", "Design"],
    applied: 10,
    capacity: 40,
  },
];
const yearlyData = [
  { year: "2013", jobView: 200000, jobApplied: 150000, jobInterview: 25400 },
  { year: "2014", jobView: 220000, jobApplied: 140000, jobInterview: 52540 },
  { year: "2015", jobView: 100000, jobApplied: 180000, jobInterview: 52540 },
  { year: "2016", jobView: 50000, jobApplied: 150000, jobInterview: 50254 },
  { year: "2017", jobView: 90000, jobApplied: 120000, jobInterview: 50254 },
  { year: "2018", jobView: 110000, jobApplied: 140000, jobInterview: 52540 },
  { year: "2019", jobView: 140000, jobApplied: 120000, jobInterview: 52540 },
  { year: "2020", jobView: 160000, jobApplied: 140000, jobInterview: 52540 },
  { year: "2021", jobView: 200000, jobApplied: 150000, jobInterview: 52540 },
  { year: "2022", jobView: 100000, jobApplied: 180000, jobInterview: 52540 },
  { year: "2023", jobView: 210000, jobApplied: 160000, jobInterview: 52540 },
];

const monthlyData = [
  { month: "Jan", jobView: 20000, jobApplied: 15000, jobInterview: 53240 },
  { month: "Feb", jobView: 18000, jobApplied: 14000, jobInterview: 53240 },
  { month: "Mar", jobView: 22000, jobApplied: 16000, jobInterview: 53240 },
  { month: "Apr", jobView: 25000, jobApplied: 17000, jobInterview: 53240 },
  { month: "May", jobView: 30000, jobApplied: 20000, jobInterview: 53240 },
  { month: "Jun", jobView: 27000, jobApplied: 19000, jobInterview: 53240 },
  { month: "Jul", jobView: 32000, jobApplied: 22000 },
  { month: "Aug", jobView: 31000, jobApplied: 21000 },
  { month: "Sep", jobView: 28000, jobApplied: 18000 },
  { month: "Oct", jobView: 26000, jobApplied: 16000 },
  { month: "Nov", jobView: 24000, jobApplied: 14000 },
  { month: "Dec", jobView: 23000, jobApplied: 13000 },
];

const weeklyData = [
  { week: "Week 1", jobView: 5000, jobApplied: 4000, jobInterview: 5354 },
  { week: "Week 2", jobView: 7000, jobApplied: 5000, jobInterview: 5354 },
  { week: "Week 3", jobView: 6000, jobApplied: 4500, jobInterview: 5354 },
  { week: "Week 4", jobView: 8000, jobApplied: 6000, jobInterview: 5354 },
];

const jobs = [
  {
    id: 1,
    company: "Stripe",
    type: "Hybrid | Full-time",
    date: "12 March, 2025",
    status: "Applied",
    statusColor: "text-blue-500 bg-blue-100",
  },
  {
    id: 2,
    company: "Stripe",
    type: "Hybrid | Full-time",
    date: "12 March, 2025",
    status: "Interview",
    statusColor: "text-orange-500 bg-orange-100",
  },
  {
    id: 3,
    company: "Stripe",
    type: "Hybrid | Full-time",
    date: "12 March, 2025",
    status: "Declined",
    statusColor: "text-red-500 bg-red-100",
  },
];

const userData = {
  image: "/profile-pic.png",
  name: "Natasha Bunny",
  role: "UI/UX Designer",
  personalDetails: [
    { label: "Level", value: "Mid Level" },
    { label: "Experience", value: "4+ years" },
    { label: "Salary", value: "$5,000/m" },
    { label: "Emp. Type", value: "Full-time" },
  ],
  experience: [
    { logo: "/komodo-logo.png", role: "Junior UX Designer", company: "Komodo" },
    { logo: "/nomad-logo.png", role: "Software Developer", company: "Nomad" },
  ],
  skills: ["UI/UX", "Design System", "Figma", "UX Research", "Prototype", "Wireframe"],
};

const applicantSummary = {
  totalApplicants: 76,
  categories: [
    { label: "Full Time", count: 12, color: "bg-blue-600" },
    { label: "Part-Time", count: 15, color: "bg-green-500" },
    { label: "Remote", count: 13, color: "bg-blue-400" },
    { label: "Internship", count: 17, color: "bg-orange-400" },
    { label: "Contract", count: 19, color: "bg-red-500" },
  ],
};

function Dashboard() {
  const [chartData, setChartData] = useState(yearlyData);
  const [timeframe, setTimeframe] = useState("Yearly");
  return (
    <>
      <div className="py-3 px-4 ">
        <h2 className="text-xl   font-semibold">Good morning, Natasha Bunny</h2>
        <p className="text-gray-500">
          Here is your job listings statistic report.
        </p>

      </div>


      <div  className="md:flex  w-[95%] md:w-fit lg:w-fit gap-4 mt-6  p-2 lg:grid lg:grid-cols-3 mx-auto justify-around ">
        <div className="bg-blue-500 text-white p-4 rounded-lg flex items-center md:mb-0 mb-4 ">
          <FaUser className="text-2xl mr-2" />
          <div>
            <h3 className="text-lg font-bold">76</h3>
            <p>New applicants to review</p>
          </div>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg flex items-center md:mb-0 mb-4 ">
          <FaCalendarAlt className="text-2xl mr-2" />
          <div>
            <h3 className="text-lg font-bold">110</h3>
            <p>Interview schedule for today</p>
          </div>
        </div>
        <div className="bg-blue-300 text-white p-4 rounded-lg flex items-center md:mb-0 mb-4 ">
          <FaEnvelope className="text-2xl mr-2" />
          <div>
            <h3 className="text-lg font-bold">23</h3>
            <p>Messages received</p>
          </div>
        </div>
      </div>


      <div className=" w-full rounded-lg shadow-md mt-6 mx-auto px-2 pt-2">
        <div className="flex justify-between flex-wrap w-full ">
          <h3 className="text-lg font-bold  ">Job Statistics</h3>
          <div className="flex rounded-2xl w-full md:w-fit lg:w-fit items-baseline justify-center gap-2 ">
            <button
              onClick={() => {
                setChartData(weeklyData);
                setTimeframe("Weekly");
              }}
              className={`px-4 py-2 rounded ${timeframe === "Weekly"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
                }`}
            >
              Weekly
            </button>
            <button
              onClick={() => {
                setChartData(monthlyData);
                setTimeframe("Monthly");
              }}
              className={`px-4 py-2 rounded ${timeframe === "Monthly"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => {
                setChartData(yearlyData);
                setTimeframe("Yearly");
              }}
              className={`px-4 py-2 rounded ${timeframe === "Yearly"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
                }`}
            >
              Yearly
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2  py-10  ">
          <div className="max-w-full ">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <XAxis
                  dataKey={
                    timeframe === "Yearly"
                      ? "year"
                      : timeframe === "Monthly"
                        ? "month"
                        : "week"
                  }
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="jobView"
                  stackId="a"
                  fill="#4F46E5"
                  name="Job View"
                />
                <Bar
                  dataKey="jobApplied"
                  stackId="a"
                  fill="#F59E0B"
                  name="Job Applied"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mx-auto w-full px-4">
            <div className=" flex px-2  gap-3">
              <div>
                <div className="bg-white p-4 rounded-lg shadow-md mt-6  flex items-center justify-evenly">
                  <div>
                    <h3 className="text-md font-semibold">Job Views</h3>
                    <h2 className="text-2xl font-bold">
                      {timeframe.jobView}
                      <span className="text-gray-500 text-lg">
                        /{timeframe}
                      </span>
                    </h2>
                  </div>
                  <div className="bg-orange-400 text-white p-2 rounded-full">
                    <FaEye className="text-lg" />
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white p-4 rounded-lg shadow-md mt-6 w-44 flex items-center justify-between">
                  <div>
                    <h3 className="text-md font-semibold">Job Applied</h3>
                    <h2 className="text-2xl font-bold">
                      {timeframe.jobApplied}
                      <span className="text-gray-500 text-lg">
                        /{timeframe}
                      </span>
                    </h2>
                  </div>
                  <div className="bg-blue-600 text-white p-2 rounded-full">
                    <FaList className="text-lg" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" mx-auto rounded-lg p-4  shadow-md mt-6 w-full ">
                <h3 className="text-lg font-semibold">Applicants Summary</h3>
                <h2 className="text-2xl font-bold">
                  {applicantSummary.totalApplicants}{" "}
                  <span className="text-gray-500 text-lg">Applicants</span>
                </h2>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
                  <div className="flex h-full">
                    {applicantSummary.categories.map((cat, index) => (
                      <div
                        key={index}
                        className={`${cat.color}`}
                        style={{
                          width: `${(cat.count / applicantSummary.totalApplicants) *
                            100
                            }%`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className=" md:w-fit lg:w-fit mt-4 space-y-1 grid grid-cols-1">
                  {applicantSummary.categories.map((cat, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span
                        className={`w-2 h-3 ${cat.color} rounded-full`}
                      ></span>
                      <span className="text-gray-700">
                        {cat.label} : {cat.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 mx-auto py-4 w-full px-4 md:w-fit lg:w-fit">
        <h3 className="text-lg font-semibold">Job Updates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {jobData.map((job, index) => (
            <DashJobCard key={index} {...job} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Dashboard