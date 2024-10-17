import { useState, useEffect } from "react";

const useGroupEdit = (group) => {
  const [editedName, setEditedName] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedUsers, setEditedUsers] = useState([]);
  const [editedAdmins, setEditedAdmins] = useState([]);

  useEffect(() => {
    if (group) {
      setEditedName(group.name);
      setEditedDescription(group.description);
      setEditedUsers(group.members);
      setEditedAdmins(group.admins);
    }
  }, [group]);

  return {
    editedName,
    setEditedName,
    editedDescription,
    setEditedDescription,
    editedUsers,
    setEditedUsers,
    editedAdmins,
    setEditedAdmins,
  };
};

export default useGroupEdit;
