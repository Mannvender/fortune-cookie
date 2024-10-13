import React, { useContext, useEffect } from "react";
import { UserPlusIcon } from "@heroicons/react/24/outline"; // Importing icons from @heroicons/react v2
import { UserContext } from "../contexts/userContext";
import useFetchGroups from "../customHooks/useFetchGroups";
import useFetchLoggedInUser from "../customHooks/useFetchLoggedInUser";
import GroupCard from "./GroupCard"; // Importing GroupCard component

function Groups() {
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
              <GroupCard key={group.id} group={group} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Groups;
