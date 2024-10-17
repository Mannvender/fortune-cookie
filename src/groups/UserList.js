import React from "react";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import InitialsAvatar from "../components/InitialsAvatar";

const UserList = ({
  users,
  admins,
  isEditing,
  showAllUsers,
  setShowAllUsers,
  handleRemoveUser,
}) => {
  // visible users is admins and users combined
  const members = [...admins, ...users];
  const visibleUsers = showAllUsers ? members : members.slice(0, 3);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-2">Users</h2>
        <span className="text-gray-500">{users.length} members</span>
      </div>
      <ul className="list-disc list-inside text-gray-600">
        {visibleUsers.map((user) => (
          <li key={user.id} className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <InitialsAvatar name={user.name} size={8} />
              <span className="ml-2">{user.name}</span>
            </div>
            {/* show admin tag */}
            {admins.find((admin) => admin.id === user.id) && (
              <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
                Admin{" "}
              </span>
            )}
            {isEditing && (
              <button
                onClick={() => handleRemoveUser(user.id)}
                className="ml-2 text-red-500"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            )}
          </li>
        ))}
      </ul>
      {!isEditing && users.length > 3 && (
        <div className="flex justify-center">
          <button
            className="mt-2 w-full text-sm text-blue-500 flex items-center justify-center"
            onClick={() => setShowAllUsers(!showAllUsers)}
          >
            {showAllUsers ? (
              <>
                Show Less <ChevronUpIcon className="h-4 w-4 ml-1" />
              </>
            ) : (
              <>
                Show More <ChevronDownIcon className="h-4 w-4 ml-1" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default UserList;
