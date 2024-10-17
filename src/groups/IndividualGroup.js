import React, { useState } from "react";
import {
  PencilIcon,
  ArrowLeftIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import useGroup from "../customHooks/useGroup";
import useGroupEdit from "../customHooks/useGroupEdit";
import UserList from "../groups/UserList";

const IndividualGroup = () => {
  const { group } = useGroup();
  const {
    editedName,
    setEditedName,
    editedDescription,
    setEditedDescription,
    editedUsers,
    setEditedUsers,
  } = useGroupEdit(group);
  const [showAllUsers, setShowAllUsers] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const handleSave = () => {
    // Save the changes (e.g., send to server)
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Revert the changes
    if (group) {
      setEditedName(group.name);
      setEditedDescription(group.description);
      setEditedUsers(group.members);
    }
    setIsEditing(false);
  };

  const handleAddUser = () => {
    const newUser = { id: Date.now(), name: "New User" }; // Example new user
    setEditedUsers([...editedUsers, newUser]);
  };

  const handleRemoveUser = (id) => {
    setEditedUsers(editedUsers.filter((user) => user.id !== id));
  };

  if (!group) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 max-w-4xl mb-20 text-white">
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
        <div>
          <h1 className="text-3xl font-bold mb-4">{group.name}</h1>
          <p className="mb-4 text-gray-600">{group.description}</p>
        </div>
      )}

      <UserList
        users={group.members}
        admins={group.admins}
        isEditing={isEditing}
        showAllUsers={showAllUsers}
        setShowAllUsers={setShowAllUsers}
        handleRemoveUser={handleRemoveUser}
      />

      {isEditing && (
        <button
          onClick={handleAddUser}
          className="mt-2 w-full text-sm text-blue-500 flex items-center justify-center"
        >
          <PlusIcon className="h-5 w-5 mr-1" />
          Add User
        </button>
      )}

      <div className="mb-4">
        <button className="w-full text-sm text-blue-500 flex items-center justify-center">
          Settle Up
        </button>
      </div>
    </div>
  );
};

export default IndividualGroup;
