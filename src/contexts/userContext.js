import React, { createContext, useState } from "react";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const saveUser = (details) => {
    setUser(details);
  };

  return (
    <UserContext.Provider value={{ user, saveUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
