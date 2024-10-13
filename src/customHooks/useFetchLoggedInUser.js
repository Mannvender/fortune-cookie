import { useEffect, useContext, useState, useRef } from "react";
import { callGetLoggedInUserApi } from "../apis/user";
import { LoaderContext } from "../contexts/loaderContext";
import { UserContext } from "../contexts/userContext";

const useFetchLoggedInUser = () => {
  const [error, setError] = useState(null);
  const { setLoading } = useContext(LoaderContext);
  const { user, saveUser } = useContext(UserContext);
  const hasFetched = useRef(false); // Singleton pattern

  useEffect(() => {
    console.log("hasFetched.current: ", hasFetched.current);
    if (hasFetched.current) return; // Prevent multiple fetches

    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await callGetLoggedInUserApi();
        saveUser(response.data);
        hasFetched.current = true; // Mark as fetched
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [setLoading, saveUser]);

  return { user, error };
};

export default useFetchLoggedInUser;
