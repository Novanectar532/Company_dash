import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Applayout from './Applayout'
import Dashboard from './component/dashboard/Dashboard'
import Findjob from './component/findjob/Findjob'
import JobDetails from './component/findjob/JobDetails'

import Company_profile from './component/company/CompanyProfile'
import MessagingUI from './component/message/Message'
import Allapplicants from './component/allapplicants/Applicantdetails'
import InterviewSchedule from "./component/Allapplicants/InterviewSchedule";

import Joblisting from './component/joblist/Joblisting'
import SettingsPage from './component/setting/Setting'
import PostjobLayout from './pages/PostjobLayout'
import ApplicantDetails from './component/ApplicantDetails'

import Postjob from './component/PostJob/postjob.jsx'
import ViewJob from './component/PostJob/viewJob.jsx'
import Update from './component/PostJob/update.jsx'
// function App() {
//   const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Applayout />,
//     children: [
//       { path: '/', element: <Dashboard /> },
//       { path: '/comapnyprofile', element: <Company_profile /> },
//       { path: '/message', element: <MessagingUI /> },
//       { path: '/all', element: <MessagingUI /> },
//       { path: '/allapplicants', element: <ApplicantDetails /> },
//       { path: '/InterviewSchedule', element: <InterviewSchedule /> }, // ✅ This is the key addition
//       { path: '/joblisting', element: <Joblisting /> },
//       { path: '/setting', element: <SettingsPage /> },
//       { path: '/compapplicantprofile', element: <ApplicantDetails /> },
//     ]
//   },
//   {
//     path: '/jobpost',
//     element: <PostjobLayout />,
//     children: [
//       { path: '', element: <Step1 /> },
//       { path: 'step2', element: <Step2 /> },
//       { path: 'step3', element: <Step3 /> }
//     ]
//   }
// ])



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
        
        ,{
          path : '/post',
          element : <Postjob/>
        }
        ,{
          path : '/viewjob',
          element : <ViewJob/>
        }
        ,{
          path : '/updatejob/:id',
          element : <Update/>
        }, { path: '/setting', element: <SettingsPage /> },
        { path: '/allapplicants', element: <ApplicantDetails /> },
        { path: '/joblisting', element: <Joblisting /> },
       
      ]
    }
  ])

  return <RouterProvider router = {router}/>
   
  
}

export default App
