import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  currentUser: null,
  testuser : () => Promise,

});

export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentuser] = useState(null);

  useEffect(() => {
    console.log("loading");
  }, []);



  async function testuser() {
    setCurrentuser("user1")
    console.log("test");
  }


  const value = {
    currentUser,
    testuser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
