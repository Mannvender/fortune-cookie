import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/userContext";
import useFetchGroups from "../customHooks/useFetchGroups";
import useFetchLoggedInUser from "../customHooks/useFetchLoggedInUser";

function Dashboard() {
  const { user } = useContext(UserContext);
  const { groups } = useFetchGroups(user?.id);
  const { error: userError } = useFetchLoggedInUser();
  const greeting =
    new Date().getHours() < 12 ? "Good Morning," : "Good Evening,";
  const userName = user?.name?.charAt(0).toUpperCase() + user?.name?.slice(1);

  useEffect(() => {
    console.log("Dashboard mounted");
    if (!user) return;
    console.log("user in Dashboard", user);
  }, [user]);

  if (userError) return <div>Error fetching user: {userError.message}</div>;

  return (
    <>
      {user && (
        <div className="mt-4">
          <div className="text-sm">{greeting}</div>
          <h1 className="text-2xl">{userName}</h1>
        </div>
      )}
      {groups.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Your Groups</h2>
          <div className="mt-2">
            {groups.map((group) => (
              <div key={group.id} className="mt-2">
                <span className="text-sm">{group.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;
