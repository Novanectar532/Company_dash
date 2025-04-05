import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaLinkedin, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('candidate');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative">
            
        {/* Tabs for Candidate/Employee */}
        <div className="flex justify-center mt-4 mb-6">
          <div className="grid grid-cols-2 bg-gray-100 rounded-lg p-1 w-64">
            <button 
              className={`py-2 px-4 rounded-lg transition-all ${activeTab === 'candidate' ? 'bg-white shadow-sm text-[#4640DE]' : 'text-gray-600'}`}
              onClick={() => setActiveTab('candidate')}
            >
              Candidate
            </button>
            <button 
              className={`py-2 px-4 rounded-lg transition-all ${activeTab === 'employee' ? 'bg-white shadow-sm text-[#4640DE]' : 'text-gray-600'}`}
              onClick={() => setActiveTab('employee')}
            >
              Employee
            </button>
          </div>
        </div>
        
        {/* Form content */}
        <div className="px-6 pb-6">
          <h2 className="text-xl font-bold text-center mb-1">Create Your Account & Start Applying!</h2>
          <p className="text-gray-500 text-center mb-6">Create your account to continue and explore new jobs</p>
          
          {/* Social sign-up buttons */}
          <div className="space-y-3 mb-4">
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
          
          {/* Email/Password form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="Enter email address" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4640DE]"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password</label>
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
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Confirm Password</label>
              <div className="relative">
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  placeholder="Confirm password" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4640DE]"
                  required
                />
                <button 
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-3 text-gray-500"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full py-3 bg-[#4640DE] text-white rounded-lg hover:bg-[#3530B3] transition duration-200 mb-4"
            >
              Sign Up
            </button>
            
            <div className="text-center mb-4">
              <span className="text-gray-600">Already have an account? </span>
              <Link to="/login" className="text-[#4640DE] hover:underline">Log In</Link>
            </div>
            
            <div className="flex items-start">
              <input 
                type="checkbox" 
                id="terms" 
                className="mt-1"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                By clicking "Sign up", you acknowledge that you have read and accept the 
                <a href="#" className="text-[#4640DE] hover:underline"> Terms of Services</a> and 
                <a href="#" className="text-[#4640DE] hover:underline"> Privacy Policy</a>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;