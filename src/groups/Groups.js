import React, { useContext, useEffect } from "react";
import {
  UsersIcon,
  UserGroupIcon,
  ChartBarIcon,
  PlusCircleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline"; // Importing icons from @heroicons/react v2
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

  console.log(groups, " ----- groups");
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
        <div className="mt-4 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            {/* Create New Group Card */}
            <div className="bg-gray-700 shadow-md p-4 flex flex-col items-center justify-center">
              <UserPlusIcon className="h-6 w-6" />
              <span className="text-base mt-2">Create New Group</span>
            </div>
            {groups.map((group) => (
              <div key={group.id} className="bg-gray-700 shadow-md p-4">
                <h3 className="text-xl font-semibold">{group.name}</h3>
                <hr className="my-2 border-gray-600" />
                <div className="flex justify-between text-sm">
                  <div>
                    <p className="text-xs text-gray-400">You Owe</p>
                    <p>500</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Total Members</p>
                    <p>{group.memberIds?.length}</p>
                  </div>
                </div>
                <button className="mt-4 w-full border-2 border-blue-500 py-2 px-4">
                  Action
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;
