// src/contexts/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState({
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
  });
  const [user, setUser] = useState({});

  const API = process.env.REACT_APP_API_URL || 'http://45.80.149.202:8000/api';

  // Login stores tokens
  const login = async (phone_number, password) => {
    const response = await axios.post(
      `${API}/users/login/`,
      { phone_number, password }
    );
    const { access, refresh } = response.data;
    localStorage.setItem('access',  access);
    localStorage.setItem('refresh', refresh);
    setAuthTokens({ access, refresh });
  };

  // Logout clears tokens and notifies backend
  const logout = async () => {
    try {
      await axios.post(
        `${API}/users/logout/`,
        { refresh: authTokens.refresh },
        { headers: { Authorization: `Bearer ${authTokens.access}` } }
      );
    } catch (_) {}
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    setAuthTokens({ access: null, refresh: null });
    setUser({});
  };

   // New: function to re-fetch the /me endpoint
   const refreshUser = async () => {
    if (!authTokens.access) {
      setUser({});
      return;
    }
    try {
      const res = await axios.get(
        `${API}/users/me/`,
        { headers: { Authorization: `Bearer ${authTokens.access}` } }
      );
      setUser(res.data);
    } catch (err) {
      console.error('Failed to refresh user', err);
      setUser({});
    }
  };


  // On mount or token change, fetch the user profile
  useEffect(() => {
    refreshUser()
  }, [authTokens.access]);

  return (
    <AuthContext.Provider value={{
      user,
      authTokens,
      isAuthenticated: Boolean(authTokens.access),
      login,
      logout,
      refreshUser,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
