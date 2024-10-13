import React, { createContext, useState } from "react";
import Loader from "../loader/Loader";

const LoaderContext = createContext();

function LoaderContextProvider({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {loading && <Loader />}
      {children}
    </LoaderContext.Provider>
  );
}

export { LoaderContext, LoaderContextProvider };
