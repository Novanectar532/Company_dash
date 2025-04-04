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
        }
       
      ]
    }
  ])

  return <RouterProvider router = {router}/>
   
  
}

export default App
