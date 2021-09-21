import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/env";

export const AuthContext = React.createContext({});

export default function Auth({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/auth/authcheck`, { withCredentials: true })
      .then((res) => {
        setIsLoading(false);
        setIsAuthenticated(res.data.isAuthenticated);
        console.log(res.data);
        setUser({ ...res.data.user });
        setIsAuthenticated(true);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsAuthenticated(true);
      });
  };

  const login = () => {
    checkAuth();
  };

  const logout = () => {
    checkAuth();
  };

  const signUp = (credentials) => setIsAuthenticated(true);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isLoading, login, logout, signUp, user }}
    >
      {children}
    </AuthContext.Provider>
  );
}
