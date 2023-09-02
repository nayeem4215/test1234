import React, { createContext, useContext, useState } from "react";
import { signIn } from "../actions/users";

export const AuthStatusContext = createContext();

const initialState = sessionStorage.getItem("user")
  ? sessionStorage.getItem("user")
  : null;
const AuthStatusProvider = ({ children }) => {
  const [authStatus, setAuthStatus] = useState(initialState);
  console.log("rendering");

  const login = (user) => {
    signIn(user, setAuthStatus);
    console.log(authStatus);
  };

  const logout = () => {
    sessionStorage.removeItem("user");
    setAuthStatus(null);
  };

  return (
    <AuthStatusContext.Provider value={{ authStatus, login, logout }}>
      {children}
    </AuthStatusContext.Provider>
  );
};

export default AuthStatusProvider;
