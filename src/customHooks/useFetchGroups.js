import { useState, useEffect, useContext } from "react";
import { callGetGroupsApi } from "../apis/group";
import { LoaderContext } from "../contexts/loaderContext";
import { GroupsContext } from "../contexts/groupsContext";

const useFetchGroups = (userId) => {
  const { groups, setGroups } = useContext(GroupsContext);
  const [error, setError] = useState(null);
  const { setLoading } = useContext(LoaderContext);

  useEffect(() => {
    console.log("userId in UseFetchGroups ----- " + userId);
    if (!userId) return;
    const fetchGroups = async () => {
      try {
        setLoading(true);
        const response = await callGetGroupsApi();
        setGroups(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, [userId]);

  return { groups, error };
};

export default useFetchGroups;
