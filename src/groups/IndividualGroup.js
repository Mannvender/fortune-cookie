import React, { useState } from "react";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  PencilIcon,
  ArrowLeftIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import InitialsAvatar from "../components/InitialsAvatar"; // Importing InitialsAvatar component

// Sample data for demonstration
const sampleGroupData = {
  name: "Golden Triangle 2",
  description:
    "A group for sharing expenses during our trip to the Golden Triangle.",
  createdByUserId: 6,
  memberIds: [4, 5, 6],
  admin: "John Doe",
  users: [
    { id: 4, name: "Alice" },
    { id: 5, name: "Bob" },
    { id: 6, name: "John Doe" },
    { id: 7, name: "Charlie" },
    { id: 8, name: "David" },
  ],
  transactions: [
    {
      id: 1,
      description: "Dinner at restaurant",
      amount: 50,
      status: "pending",
    },
    { id: 2, description: "Taxi fare", amount: 30, status: "pending" },
  ],
  activities: [
    { id: 1, description: "Alice added a new expense", date: "2023-10-01" },
    { id: 2, description: "Bob settled an expense", date: "2023-10-02" },
  ],
};

const IndividualGroup = () => {
  const { name, description, admin, users, transactions, activities } =
    sampleGroupData;
  const [showAllUsers, setShowAllUsers] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedUsers, setEditedUsers] = useState(users);
  const navigate = useNavigate();

  const visibleUsers = showAllUsers ? editedUsers : editedUsers.slice(0, 3);

  const handleSave = () => {
    // Save the changes (e.g., send to server)
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Revert the changes
    setEditedName(name);
    setEditedDescription(description);
    setEditedUsers(users);
    setIsEditing(false);
  };

  const handleAddUser = () => {
    const newUser = { id: Date.now(), name: "New User" }; // Example new user
    setEditedUsers([...editedUsers, newUser]);
  };

  const handleRemoveUser = (id) => {
    setEditedUsers(editedUsers.filter((user) => user.id !== id));
  };

  return (
    <div className="p-4 max-w-4xl mx-auto mb-20 text-white">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => navigate(-1)} className="flex items-center">
          <ArrowLeftIcon className="h-5 w-5 mr-1" />
          Back
        </button>
        {isEditing ? (
          <div className="flex space-x-2">
            <button onClick={handleSave} className="flex items-center">
              Save
            </button>
            <button onClick={handleCancel} className="flex items-center">
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center"
          >
            <PencilIcon className="h-5 w-5 mr-1" />
            Edit
          </button>
        )}
      </div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="text-3xl font-bold p-2 mb-4 bg-gray-800 w-full max-w-full border border-gray-500 focus:border-white rounded"
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="mb-4 text-gray-600 bg-gray-800 p-2 w-full max-w-full border border-gray-500 focus:border-white rounded"
          />
        </div>
      ) : (
        <>
          <div>
            <h1 className="text-3xl font-bold mb-4">{name}</h1>
            <p className="mb-4 text-gray-600">{description}</p>
          </div>
          <div className="mb-4">
            <button className="w-full text-base flex items-center justify-center border-2 p-2">
              Settle Up
            </button>
          </div>
        </>
      )}

      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-2">Users</h2>
          <span className="text-gray-500">{editedUsers.length} members</span>
        </div>
        <ul className="list-disc list-inside text-gray-600">
          {(isEditing ? editedUsers : visibleUsers).map((user) => (
            <li
              key={user.id}
              className="flex items-center justify-between mb-2"
            >
              <div className="flex items-center">
                <InitialsAvatar name={user.name} size={8} />
                <span className="ml-2">{user.name}</span>
              </div>
              {isEditing && (
                <button
                  onClick={() => handleRemoveUser(user.id)}
                  className="ml-2 text-red-500"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              )}
              {user.name === admin && (
                <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
                  Admin
                </span>
              )}
            </li>
          ))}
        </ul>
        {!isEditing && editedUsers.length > 3 && (
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
        {isEditing && (
          <button
            onClick={handleAddUser}
            className="mt-2 w-full text-sm text-blue-500 flex items-center justify-center"
          >
            <PlusIcon className="h-5 w-5 mr-1" />
            Add User
          </button>
        )}
      </div>
      {!isEditing && (
        <>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">Group Activities</h2>
            <ul className="list-disc list-inside text-gray-600">
              {activities.map((activity) => (
                <li key={activity.id}>
                  {activity.description} - {activity.date}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default IndividualGroup;
