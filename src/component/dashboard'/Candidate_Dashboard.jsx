import React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import PersnolProfile from "./PersnolProfile";
import {
  FaUser,
  FaCalendarAlt,
  FaEnvelope,
  FaEye,
  FaList,
  FaBell,
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

const Candidate_Dashboard = () => {
  const [chartData, setChartData] = useState(yearlyData);
  const [timeframe, setTimeframe] = useState("Yearly");





  const DetailItem = ({ label, value, bold }) => (
    <div className="flex justify-between">
      <span className={`text-sm ${bold ? 'font-semibold' : 'text-gray-500'}`}>{label}</span>
      <span className={`${bold ? 'font-semibold' : 'text-gray-900'}`}>{value}</span>
    </div>
  )
  
  const ExperienceItem = ({ title, company }) => (
    <div className="flex items-start">
      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3" />
      <div>
        <p className="font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{company}</p>
      </div>
    </div>
  )
  
  const SkillPair = ({ main, sub }) => (
    <div className="flex justify-between items-center">
      <span className="font-medium text-gray-900">{main}</span>
      <span className="text-sm text-gray-500">{sub}</span>
    </div>
  )

  return (
    <div className="flex  w-full">

     
      <main className="flex-1 px-2 mx-auto">
        <nav className="flex justify-end items-center p-2 bg-amber-300 shadow-md w-full ">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-indigo-700 transition">
            + Post a job
          </button>
          <FaBell className="text-gray-600 text-xl mx-4 cursor-pointer hover:text-gray-800 transition" />
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="User"
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
          />
        </nav>
        <h2 className="text-xl  pt-5 font-semibold">
          Good morning, Natasha Bunny
        </h2>
        <p className="text-gray-500">
          Here is your job listings statistic report.
        </p>

       
        <div className="md:flex gap-4 mt-6 gap-y-4   lg:grid lg:grid-cols-4 mx-auto justify-around  ">
          <div className="bg-blue-500 text-white p-4 rounded-lg flex items-center md:mb-0 mb-4 ">
            <FaUser className="text-2xl mr-2" />
            <div>
              <h3 className="text-lg font-bold">76</h3>
              <p>application Sent</p>
            </div>
          </div>
          <div className="bg-green-500 text-white p-4 rounded-lg flex items-center md:mb-0 mb-4 ">
            <FaCalendarAlt className="text-2xl mr-2" />
            <div>
              <h3 className="text-lg font-bold">110</h3>
              <p>Interview schedule</p>
            </div>
          </div>
          <div className="bg-blue-300 text-white p-4 rounded-lg flex items-center md:mb-0 mb-4 ">
            <FaEnvelope className="text-2xl mr-2" />
            <div>
              <h3 className="text-lg font-bold">23</h3>
              <p>Recent job offer</p>
            </div>
          </div>
          <div className="bg-blue-300  p-4 rounded-lg flex items-center md:mb-0 mb-4 ">
            <FaEnvelope className="text-2xl mr-2" />
            <div>
              <h3 className="text-lg font-bold">23</h3>
              <p>unread masege</p>
            </div>
          </div>
        </div>

      
        <div className="  rounded-lg shadow-md  mx-auto px-2  py-5">
          <div className=" md:grid md:grid-cols-3 gap-3">
           <div className="col-span-2 bg-cover p-2" >
              <div className="flex justify-between pb-10  ">
                <h3 className="text-lg font-semibold">Profile View</h3>
                <div className="flex rounded-2xl">
                  <button
                    onClick={() => {
                      setChartData(weeklyData);
                      setTimeframe("Weekly");
                    }}
                    className={`px-4 py-2 rounded ${
                      timeframe === "Weekly"
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
                    className={`px-4 py-2 rounded ${
                      timeframe === "Monthly"
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
                    className={`px-4 py-2 rounded ${
                      timeframe === "Yearly"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    Yearly
                  </button>
                </div>
              </div>
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
                  <Bar
                    dataKey="jobInterview"
                    stackId="a"
                    fill="#10B981"
                    name="Job Interview"
                  />
                </BarChart>
              </ResponsiveContainer>
              <div className=" shadow-lg rounded-lg p-6 w-full  mx-auto">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Recent Applied Job</h2>
                    <a href="#" className="text-purple-600 font-medium hover:underline">Show all →</a>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className=" text-gray-600 text-left text-sm">
                          <th className="p-3">Company Name</th>
                          <th className="p-3">Date & Time</th>
                          <th className="p-3">Status</th>
                          <th className="p-3">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {jobs.map((job) => (
                          <tr key={job.id} className="border-b">
                            <td className="p-3 flex items-center gap-3">
                              <div className="bg-blue-500 text-white p-4 rounded-md">S</div>
                              <div>
                                <p className="font-medium text-gray-900">{job.company}</p>
                                <p className="text-sm text-gray-500">{job.type}</p>
                              </div>
                            </td>
                            <td className="p-3 text-gray-700">{job.date}</td>
                            <td className="p-3">
                              <span
                                className={`px-3 py-1 rounded-full text-sm font-medium ${job.statusColor}`}
                              >
                                {job.status}
                              </span>
                            </td>
                            <td className="p-3">
                              <button className="text-gray-500 hover:text-gray-700">
                                <ChevronDown size={16} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
           </div>

            <div className="  rounded-xl shadow-sm p-6 space-y-6 justify-self-center">
            <PersnolProfile user={userData}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Candidate_Dashboard;
