import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { GroupsContext } from "../contexts/groupsContext";

const useGroup = () => {
  const { groupId } = useParams();
  const { groups } = useContext(GroupsContext);
  const [group, setGroup] = useState(null);

  useEffect(() => {
    const foundGroup = groups.find((group) => group.id == groupId);
    if (foundGroup) {
      setGroup(foundGroup);
    }
  }, [groupId, groups]);

  return {
    group,
  };
};

export default useGroup;
