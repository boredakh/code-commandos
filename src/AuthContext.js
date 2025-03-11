import React, { createContext, useState, useEffect } from 'react';
import { supabase } from '../src/components/supabaseclient'; // Import your Supabase client

// Step 1: Create the AuthContext
export const AuthContext = createContext();

// Step 2: Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    role: null, // 'organisation' or 'volunteer'
  });

  // Check if the user is authenticated when the app loads
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser(); // Get the current user
      if (user) {
        const role = user.user_metadata?.role; // Extract the role from user metadata
        setAuthState({ isAuthenticated: true, role });
      }
    };

    checkAuth();
  }, []);

  // Function to log in the user
  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Login error:', error.message);
      return;
    }

    if (data.user) {
      const role = data.user.user_metadata?.role; // Extract the role from user metadata
      setAuthState({ isAuthenticated: true, role });
    }
  };

  // Function to log out the user
  const logout = async () => {
    await supabase.auth.signOut();
    setAuthState({ isAuthenticated: false, role: null });
  };

  // Step 3: Provide the authentication state and functions to the rest of the app
  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};