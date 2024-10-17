import React from "react";
import ReactDOM from "react-dom/client";
import "./output.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { LoaderContextProvider } from "./contexts/loaderContext";
import { UserContextProvider } from "./contexts/userContext";
import { GroupsContextProvider } from "./contexts/groupsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoaderContextProvider>
      <UserContextProvider>
        <GroupsContextProvider>
          <App />
        </GroupsContextProvider>
      </UserContextProvider>
    </LoaderContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
