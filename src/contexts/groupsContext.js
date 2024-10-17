import React, { createContext, useState } from "react";

const GroupsContext = createContext();

function GroupsContextProvider({ children }) {
  const [groups, setGroups] = useState([]);

  return (
    <GroupsContext.Provider value={{ groups, setGroups }}>
      {children}
    </GroupsContext.Provider>
  );
}

export { GroupsContext, GroupsContextProvider };
