import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import {Toaster} from 'react-hot-toast'
import { AuthProvider } from './component/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider> <App /></AuthProvider>
   
   
    <Toaster />
  </StrictMode>,
)
