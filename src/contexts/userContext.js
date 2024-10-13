import React, { createContext, useState } from "react";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [userDetails, setUserDetails] = useState(null);

  const saveUserDetails = (details) => {
    setUserDetails(details);
  };

  return (
    <UserContext.Provider value={{ userDetails, saveUserDetails }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
