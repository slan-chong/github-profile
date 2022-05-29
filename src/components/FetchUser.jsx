import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { userContext } from "../App";

const FetchUser = ({ username }) => {
  const URL = `https://api.github.com/users/${username}`;
  const { setUserInfo } = useContext(userContext);
  const [error, setError] = useState("");
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(URL);
        setUserInfo(data);
      } catch (err) {
        setFlag(true);
        setError(err.response);
      }
    };
    fetchData();
  }, [username]);
  return (
    <>
      {flag && (
        <div className="text-skin-warning text-xl">
          Not Found User,please try again
        </div>
      )}
    </>
  );
};

export default FetchUser;
