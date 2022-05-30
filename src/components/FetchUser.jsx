import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { userContext } from "../App";

const FetchUser = ({ username }) => {
  const URL = `https://api.github.com/users/${username}`;
  const { setUserInfo } = useContext(userContext);
  const [flag, setFlag] = useState(false);
  const { paramsName } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!paramsName) {
          const { data } = await axios.get(URL);
          setUserInfo(data);
        } else {
          const { data } = await axios.get(
            `https://api.github.com/users/${paramsName}`
          );
          setUserInfo(data);
        }
      } catch (err) {
        setFlag(true);
      }
    };
    fetchData();
  }, [username]);
  return (
    <>
      {flag && (
        <div className="text-skin-warning text-xl">
          Not Found {paramsName},please try again
        </div>
      )}
    </>
  );
};

export default FetchUser;
