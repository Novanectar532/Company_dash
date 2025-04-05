// import React from 'react'
// import img2 from '../photos/sign9.png'
// import { FaGoogle, FaApple } from "react-icons/fa";
// import logo from "../photos/novalogo.png"
// import { useNavigate } from 'react-router-dom';


// const login = () => {
//   const navigate = useNavigate();
//   return (
//     <div className='flex justify-center items-center h-screen relative'>
//         {/* left side div */}
//         <div>
//             <div className='absolute top-5 left-[16%] text-white font-bold text-2xl  flex'>
//                 <img src={logo} alt="" className='w-10' />
//                 NN<span className=' text-sky-500'>Hire </span>
//             </div>
//             <img src={img2}
//             className='w-140 h-screen object-cover'
//             />

//         </div>

//         {/* right side div */}
       
//         <div className='flex items-center justify-center'>
//             <div className='bg-white p-10 rounded shadow w-[500px] h-screen'>
//                 <div className='flex justify-center mb-6 gap-3'>
//                     <button className='px-4 py-2 rounded bg-gray-50 shadow  text-blue-900 hover:bg-blue-900 hover:text-white'>
//                         Candidate
//                     </button>
//                     <button className='px-4 py-2 rounded bg-gray-50 shadow  text-blue-900 hover:bg-blue-900 hover:text-white'>
//                         Employee
//                     </button>
//                 </div>
//                 <h2 className='text-xl font-semibold text-center mb-4'>Welcome To NextHire</h2>
//                 <div className="flex gap-4 mb-4">
//                             <button className="flex items-center justify-center gap-2 w-1/2 text-[#4640DE]  bg-gray-50 shadow p-2 rounded-lg ">
//                               <FaGoogle /> Sign Up with Google
//                             </button>
//                             <button className="flex items-center justify-center gap-2 w-1/2 text-[#4640DE] bg-gray-50 shadow p-2 rounded-lg ">
//                               <FaApple /> Sign Up with Apple
//                             </button>
//                           </div>
//                           <div className='text-center my-4 text-gray-400'>
//                           Or login up with email </div>
//                           <from>
//                             <label className='py-4' htmlFor="Email">Email</label>
//                             <input
//                             type='Email Address'
//                             placeholder=' Enter Email Address'
//                             className='w-full p-3 rounded  shadow my-7'
//                             />
//                             <label className=''htmlFor="password">Password</label>
//                             <input
//                             type='password'
//                             placeholder=' Enter your Password'
//                             className='w-full p-3 rounded   shadow'
//                             />
//                             <p className='text-right text-[#4640DE]'>?Forget Password</p>
//                             <button className="w-full bg-[#4640DE] p-3 rounded text-white hover:bg-indigo-600 mt-5">
//               login
//             </button>
//                           </from>
//                           <p className="text-center mt-4">
//             Don't have an account?{" "}
//             <a onClick={() => navigate('/signup')}  className="text-[#4640DE] hover:underline cursor-pointer">
//               Sign UP
//             </a>
//           </p>

//           <p className="text-sm text-center mt-2 text-gray-500">
//             By clicking 'Sign Up', you agree to the{" "}
//             <a href="#" className="text-[#4640DE] hover:underline">
//           Terms of Services
//             </a>{" "}
//             and{" "}
//             <a href="#" className="text-[#4640DE] hover:underline">
//               Privacy Policy
//             </a>.
//           </p>
                          

//             </div>

//         </div>
//     </div>
//   )
// }

// export default login















import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaLinkedin, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('candidate');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6 border border-dashed border-blue-200">
        {/* Close button in top-right */}
        <div className="flex justify-end">
          <button className="text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Tabs for Candidate/Employee */}
        <div className="flex justify-center mb-6">
          <div className="grid grid-cols-2 border border-dashed border-blue-300 rounded-lg p-1 w-full">
            <button 
              className={`py-2 px-4 rounded-lg transition-all ${activeTab === 'candidate' ? 'bg-indigo-100 text-[#4640DE]' : 'text-gray-600'}`}
              onClick={() => setActiveTab('candidate')}
            >
              Candidate
            </button>
            <button 
              className={`py-2 px-4 rounded-lg transition-all ${activeTab === 'employee' ? 'bg-indigo-100 text-[#4640DE]' : 'text-gray-600'}`}
              onClick={() => setActiveTab('employee')}
            >
              Employee
            </button>
          </div>
        </div>
        
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-1">Welcome Back! Find Your Next Opportunity.</h2>
          <p className="text-gray-500 text-sm">Log in to explore job opportunities and stay informed.</p>
        </div>
        
        {/* Social login buttons */}
        <div className="space-y-3 mb-6">
          <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50">
            <FaGoogle className="text-red-500 mr-3" />
            <span className="text-gray-700">Sign Up with Google</span>
          </button>
          <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50">
            <FaLinkedin className="text-blue-600 mr-3" />
            <span className="text-gray-700">Sign Up with LinkedIn</span>
          </button>
          <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50">
            <FaApple className="text-black mr-3" />
            <span className="text-gray-700">Sign Up with Apple</span>
          </button>
        </div>
        
        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-4 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>
        
        {/* Login form */}
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              User Name
            </label>
            <input 
              type="text" 
              placeholder="Enter your user name" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4640DE]"
              required
            />
          </div>
          
          <div className="mb-1">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter password" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4640DE]"
                required
              />
              <button 
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          
          <div className="flex justify-end mb-5">
            <a href="forget-password" className="text-red-500 text-sm hover:underline">
              Forgot your password?
            </a>
          </div>
          
          <button 
            type="submit" 
            className="w-full py-3 bg-[#4640DE] text-white rounded-lg hover:bg-[#3530B3] transition duration-200 mb-4"
          >
            Log In
          </button>
        </form>
        
        <div className="text-center mb-4">
          <p className="text-gray-600 text-sm">
            Don't have an account? <Link to="/signup" className="text-[#4640DE] hover:underline">Create an account</Link>
          </p>
        </div>
        
        {/* Terms of service */}
        <div className="text-xs text-gray-500 text-center">
          By clicking "Log in", you acknowledge that you have read and accept the 
          <a href="#" className="text-[#4640DE] hover:underline"> Terms of Services</a> and 
          <a href="#" className="text-[#4640DE] hover:underline"> Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
};

export default Login;