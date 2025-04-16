import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Configure axios
  axios.defaults.baseURL = 'http://localhost:5000';
  axios.defaults.withCredentials = true;

  useEffect(() => {
    // Get token from localStorage
    const token = localStorage.getItem('authToken');
    
    // Set auth header if token exists
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    
    // Verify token on app load
    const verifyToken = async () => {
      if (!token) {
        setLoading(false);
        return;
      }
      
      try {
        const res = await axios.get('http://localhost:5000/api/profile');
        if (res.data) {
          setUser(res.data);
        } else {
          localStorage.removeItem('authToken');
          delete axios.defaults.headers.common['Authorization'];
          setUser(null);
        }
      } catch (err) {
        console.error("Authentication error:", err);
        localStorage.removeItem('authToken');
        delete axios.defaults.headers.common['Authorization'];
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
  
    verifyToken();
  }, []);

  const login = async (email, password) => {
    try {
      setError(null);
      const res = await axios.post('/api/auth/login', { email, password });
      
      // Save token to localStorage
      if (res.data.token) {
        localStorage.setItem('authToken', res.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
      }
      
      setUser(res.data.user);
      return true;
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      return false;
    }
  };

  const logout = async () => {
    try {
      // Remove token from localStorage
      localStorage.removeItem('authToken');
      delete axios.defaults.headers.common['Authorization'];
      setUser(null);
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};