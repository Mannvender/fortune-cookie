import React, { useContext } from "react";
import { UserContext } from "../contexts/userContext";

function Dashboard() {
  const { userDetails } = useContext(UserContext);
  const greeting =
    new Date().getHours() < 12 ? "Good Morning," : "Good Evening,";
  const userName =
    userDetails?.name?.charAt(0).toUpperCase() + userDetails?.name?.slice(1);

  return (
    <>
      {userDetails && (
        <div className="mt-4">
          <div className="text-sm">{greeting}</div>
          <h1 className="text-2xl">{userName}</h1>
        </div>
      )}
    </>
  );
}

export default Dashboard;
