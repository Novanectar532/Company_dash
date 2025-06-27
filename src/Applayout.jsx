import React from 'react'
import Dashboard from './component/dashboard/Dashboard'
import Sidebar from './component/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './component/Header'

import {
  FaUser,
  FaCalendarAlt,
  FaEnvelope,
  FaEye,
  FaList,
  FaBell,
} from "react-icons/fa";

function Applayout() {
  return (
    <>
      <div className='flex flex-row'>
        <Sidebar className=' bg-amber-200' containerStyle='w-64 bg-white shadow-md hidden lg:block'/>
        <div className='w-full flex flex-col'>
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Applayout