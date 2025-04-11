import React from "react";
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import { MdOutlineDashboardCustomize,MdLogout  } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdDocument, IoMdPeople } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { TbBuildings } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";

function MobileSidebar({ setIsVisible, isVisible }) {
    return (
        <aside onClick={() => setIsVisible(!isVisible)}
            className={`fixed h-full w-full md:w-1/2 bg-white top-0 left-0 z-50 py-4 px-3 transition-transform duration-300 ease-in-out border-r border-gray-500
          ${isVisible ? 'translate-x-0' : '-translate-x-full'}
        `}
        >
            {/* top logo with cancel icon container */}
            <div className="flex items-center justify-evenly">
                <IoMdClose onClick={() => setIsVisible(!isVisible)} size={28} className="cursor-pointer" />
                <h1 className="text-2xl font-bold  pl-6 pt-2">Next<span className="bg-clip-text text-transparent bg-indigo-600">Hire</span></h1>
            </div>

            {/* rest of the navlinks container */}
            <div className="flex flex-col items-start justify-center gap-4 mt-6 px-4">
                <Link className="flex items-center justify-start gap-3 text-gray-500 w-full hover:text-indigo-600 hover:scale-105 transition-all" to="/">
                    <MdOutlineDashboardCustomize size={20} />
                    <span>Dashboard</span>
                </Link>
                <Link className="flex items-center justify-start gap-3 text-gray-500 w-full hover:text-indigo-600 hover:scale-105 transition-all" to="/comapnyprofile">
                    <TbBuildings size={20} />
                    <span>Company Profile</span>
                </Link>
                <Link className="flex items-center justify-start gap-3 text-gray-500 w-full hover:text-indigo-600 hover:scale-105 transition-all" to="/message">
                    <TiMessages size={20} />
                    <span>Messages</span>
                </Link>
                <Link className="flex items-center justify-start gap-3 text-gray-500 w-full hover:text-indigo-600 hover:scale-105 transition-all" to="/">
                    <IoMdPeople size={20} />
                    <span>All Applicants</span>
                </Link>
                <Link className="flex items-center justify-start gap-3 text-gray-500 w-full hover:text-indigo-600 hover:scale-105 transition-all" to="/">
                    <IoMdDocument size={20} />
                    <span>Job Listing</span>
                </Link>
                <Link className="flex items-center justify-start gap-3 text-gray-500 w-full hover:text-indigo-600 hover:scale-105 transition-all" to="/">
                    <FaCalendarAlt size={20} />
                    <span>My Schedule</span>
                </Link>
            </div>

         
            {/* user info tab */}
            <div className="absolute bottom-5 left-0 w-full flex flex-col mt-5  items-center justify-center space-x-4 md:space-x-6 ">
            <div className="absolute bottom-38 left-5 mt-19 flex flex-col items-start justify-center gap-4  px-4">
                    <Link className="flex items-center justify-start gap-3 text-gray-500 w-full hover:text-indigo-600 hover:scale-105 transition-all" to="/"><IoMdSettings size={20}/>
                        <span>Settings</span></Link>
                    <Link className="flex items-center justify-start gap-3 text-gray-500 w-full hover:text-indigo-600 hover:scale-105 transition-all" to="/"><RiCustomerService2Fill size={20}/><span>Help Center</span></Link>
                    <Link className="flex items-center justify-start gap-3 text-gray-500 w-full hover:text-indigo-600 hover:scale-105 transition-all" to="/"><MdLogout size={20}/><span>Log Out</span></Link>
                </div>

                <div className="flex items-center justify-center gap-2">
                    <img
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        alt="User"
                        className="w-10 h-10 rounded-full object-cover cursor-pointer"
                    />
                    <div>
                        <h4>Natasha Bunny</h4>
                        <span>Lorem ipsum dolor sit amet </span>
                    </div>
                </div>

                <button className="m-auto mt-4 w-3/5 text-center bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-indigo-700 transition justify-center">
                    + Post a job
                </button>
            </div>
            {/* post a job cta button */}

        </aside>


    )
}

export default MobileSidebar;