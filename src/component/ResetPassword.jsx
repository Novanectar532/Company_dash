import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const validatePasswords = () => {
    if (newPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return false;
    }
    
    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return false;
    }
    
    setPasswordError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validatePasswords()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call to reset password
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // In a real app, you would make an API call to reset the password
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6 text-center">
          {/* Close button in top-right */}
          <div className="flex justify-end">
            <Link to="/login" className="text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Link>
          </div>
          
          {/* Success icon */}
          <div className="flex justify-center mb-6 mt-4">
            <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          
          {/* Success message */}
          <h2 className="text-xl font-bold text-gray-800 mb-4">Password Reset Successful</h2>
          
          <p className="text-gray-500 mb-6">
            Your password has been successfully reset. You can now use your new password to log in.
          </p>
          
          <button 
            onClick={() => navigate("/login")}
            className="w-full py-3 bg-[#4640DE] text-white rounded-lg hover:bg-[#3530B3] transition duration-200 mb-4"
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6">
        {/* Close button in top-right */}
        <div className="flex justify-end">
          <Link to="/login" className="text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Link>
        </div>
        
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-1">Reset Password</h2>
          <p className="text-gray-500 text-sm">Enter email address to receive password reset link.</p>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              New Password
            </label>
            <input 
              type="password" 
              placeholder="Enter your new password" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4640DE]"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Re-Enter Password
            </label>
            <input 
              type="password" 
              placeholder="Re-enter your password" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4640DE]"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          
          {passwordError && (
            <div className="mb-4 text-red-500 text-sm">
              {passwordError}
            </div>
          )}
          
          <button 
            type="submit" 
            className="w-full py-3 bg-[#4640DE] text-white rounded-lg hover:bg-[#3530B3] transition duration-200 mb-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
          
          <div className="text-center">
            <Link to="/" className="text-[#4640DE] hover:underline">
              Back to Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;