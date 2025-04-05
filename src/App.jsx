import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Applayout from './Applayout'
import Dashboard from './component/dashboard\'/Dashboard'
import Findjob from './component/findjob/Findjob'
import JobDetails from './component/findjob/JobDetails'
import MyApplications from './component/application/MyApplications'
import Company_profile from './component/company/CompanyProfile'
import MessagingUI from './component/message/Message'
import All_Application from './component/application/All_Application'
import Schedule from './component/message/Schedule'
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Applayout/>,
      children:[
        {
          path:'/',
          element:<Dashboard/>
        },{
          path:'/comapnyprofile',
          element:<Company_profile/>
        },{
          path:'/message',
          element:<MessagingUI/> 
        },{
          path:'/all',
          element:<MessagingUI/> 
        },{
          path:'/myapplication',
          element:<All_Application/>
        },{
          path:'/schedule',
          element:<Schedule/>
        }
       
      ]
    }
  ])

  return <RouterProvider router = {router}/>
   
  
}

export default App
