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
import JobSearchPage from './component/findjob/JobSearchPage'
import JobApplicationPage from './component/findjob/JobApplicationPage'
import CompanyJobListing from './component/company/CompanyJobListing'
import SignUp from './component/Signup.jsx'
import Login from './component/Login.jsx'
import ForgetPassword from './component/ForgotPassword.jsx'
import ResetPassword from './component/ResetPassword.jsx'
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
        },{path: '/find-job', element: <JobSearchPage/>},
        {path: '/job/:id', element: <JobApplicationPage/>},
        {path: '/company-job', element: <CompanyJobListing/>},
        {path: '/signup', element: <SignUp/>}, 
      {path: '/login', element: <Login/>}, 
      {path: '/forget-password', element: <ForgetPassword/>},
      {path: '/reset-password', element: <ResetPassword/>},
      ]
    }
  ])

  return <RouterProvider router = {router}/>
   
  
}

export default App
