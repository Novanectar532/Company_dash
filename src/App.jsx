// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Applayout from './Applayout'
// import Dashboard from './component/dashboard\'/Dashboard'
// import Findjob from './component/findjob/Findjob'
// import JobDetails from './component/findjob/JobDetails'
// import MyApplications from './component/application/MyApplications'
// import Company_profile from './component/company/CompanyProfile'
// import MessagingUI from './component/message/Message'
// import Allapplicants from './component/allapplicants/Applicantdetails'
// import InterviewSchedule from "./component/Allapplicants/InterviewSchedule";

// import Joblisting from './component/joblist/Joblisting'
// import SettingsPage from './component/setting/Setting'
// import PostjobLayout from './pages/PostjobLayout'
// import ApplicantDetails from './component/ApplicantDetails'

// import Postjob from './component/PostJob/postjob.jsx'
// import ViewJob from './component/PostJob/viewJob.jsx'
// import Update from './component/PostJob/update.jsx'
// import Login from './component/Login.jsx'
// // function App() {
// //   const router = createBrowserRouter([
// //   {
// //     path: '/',
// //     element: <Applayout />,
// //     children: [
// //       { path: '/', element: <Dashboard /> },
// //       { path: '/comapnyprofile', element: <Company_profile /> },
// //       { path: '/message', element: <MessagingUI /> },
// //       { path: '/all', element: <MessagingUI /> },
// //       { path: '/allapplicants', element: <ApplicantDetails /> },
// //       { path: '/InterviewSchedule', element: <InterviewSchedule /> }, // ✅ This is the key addition
// //       { path: '/joblisting', element: <Joblisting /> },
// //       { path: '/setting', element: <SettingsPage /> },
// //       { path: '/compapplicantprofile', element: <ApplicantDetails /> },
// //     ]
// //   },
// //   {
// //     path: '/jobpost',
// //     element: <PostjobLayout />,
// //     children: [
// //       { path: '', element: <Step1 /> },
// //       { path: 'step2', element: <Step2 /> },
// //       { path: 'step3', element: <Step3 /> }
// //     ]
// //   }
// // ])



// function App() {
//   const router = createBrowserRouter([
//     {
//       path:'/',
//       element:<Applayout/>,
//       children:[
//         {
//           path:'/',
//           element:<Dashboard/>
//         },
//         {
//           path:'/login',
//           element:<Login/>
//         },
//         {
//           path:'/comapnyprofile',
//           element:<Company_profile/>
//         },{
//           path:'/message',
//           element:<MessagingUI/> 
//         },{
//           path:'/all',
//           element:<MessagingUI/> 
//         }
        
//         ,{
//           path : '/post',
//           element : <Postjob/>
//         }
//         ,{
//           path : '/viewjob',
//           element : <ViewJob/>
//         }
//         ,{
//           path : '/updatejob/:id',
//           element : <Update/>
//         }, { path: '/setting', element: <SettingsPage /> },
//         { path: '/allapplicants', element: <ApplicantDetails /> },
//         { path: '/joblisting', element: <Joblisting /> },
       
//       ]
//     }
//   ])

//   return <RouterProvider router = {router}/>
   
  
// }

// export default App














import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './component/AuthContext';
import ProtectedRoute from './component/ProtectedRoute';

// Layouts
import Applayout from './Applayout';
import PostjobLayout from './pages/PostjobLayout';

// Auth Pages
import Login from './component/Login';


// Protected Components
import Dashboard from './component/dashboard/Dashboard';
import Company_profile from './component/company/CompanyProfile';
import MessagingUI from './component/message/Message';
import Joblisting from './component/joblist/Joblisting';
import SettingsPage from './component/setting/Setting';
import ApplicantDetails from './component/ApplicantDetails';
import Postjob from './component/PostJob/postjob';
import ViewJob from './component/PostJob/viewJob';
import Update from './component/PostJob/update';
import InterviewSchedule from './component/Allapplicants/InterviewSchedule';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Applayout />,
      children: [
        {
          path: '/',
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          )
        },
        {
          path: '/login',
          element: <Login />
        },
        
        {
          path: '/comapnyprofile',
          element: (
            <ProtectedRoute>
              <Company_profile />
            </ProtectedRoute>
          )
        },
        {
          path: '/message',
          element: (
            <ProtectedRoute>
              <MessagingUI />
            </ProtectedRoute>
          )
        },
        {
          path: '/all',
          element: (
            <ProtectedRoute>
              <MessagingUI />
            </ProtectedRoute>
          )
        },
        {
          path: '/post',
          element: (
            <ProtectedRoute>
              <Postjob />
            </ProtectedRoute>
          )
        },
        {
          path: '/viewjob',
          element: (
            <ProtectedRoute>
              <ViewJob />
            </ProtectedRoute>
          )
        },
        {
          path: '/updatejob/:id',
          element: (
            <ProtectedRoute>
              <Update />
            </ProtectedRoute>
          )
        },
        {
          path: '/setting',
          element: (
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          )
        },
        {
          path: '/allapplicants',
          element: (
            <ProtectedRoute>
              <ApplicantDetails />
            </ProtectedRoute>
          )
        },
        {
          path: '/joblisting',
          element: (
            <ProtectedRoute>
              <Joblisting />
            </ProtectedRoute>
          )
        },
        {
          path: '/interviewSchedule',
          element: (
            <ProtectedRoute>
              <InterviewSchedule />
            </ProtectedRoute>
          )
        }
      ]
    }
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;