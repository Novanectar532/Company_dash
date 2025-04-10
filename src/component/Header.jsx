import React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { MdMenu } from 'react-icons/md'
// import PersnolProfile from "./PersnolProfile";
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
import MobileSidebar from "./MobileSidebar";
function Header() {
  // const [chartData, setChartData] = useState(yearlyData);
  const [timeframe, setTimeframe] = useState("Yearly");
   const [isVisible,setIsVisible] = useState(false);
  return (
    <>
     <nav className="flex justify-between  lg:justify-end items-center p-2 bg-amber-300 shadow-md relative">
  {/* Menu icon (visible only on small and medium screens) */}
  <MdMenu onClick={()=>setIsVisible(!isVisible)} size={28} className="block lg:hidden cursor-pointer " />
   <MobileSidebar isVisible={isVisible} setIsVisible={setIsVisible} />
  {/* Right-side content */}
  <div className="flex items-center space-x-4 md:space-x-6">
    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg lg:flex items-center hover:bg-indigo-700 transition hidden   cursor-pointer ">
      + Post a job
    </button>
    <FaBell className="text-gray-600 text-xl cursor-pointer hover:text-gray-800 transition" />
    <img
      src="https://randomuser.me/api/portraits/men/1.jpg"
      alt="User"
      className="w-10 h-10 rounded-full object-cover cursor-pointer"
    />
  </div>
</nav>




    </>
  )
}

export default Header