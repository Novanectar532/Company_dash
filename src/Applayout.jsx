import React from 'react'
import Dashboard from './component/dashboard\'/Dashboard'
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
    <div className='flex w-full '>
        <aside className='w-2/13 lg:block hidden h-full'><Sidebar/></aside>
        <div className=' w-full px-2'>
          {<Header/>}
          {<Outlet/>}
          </div>
    </div>
  )
}

export default Applayout