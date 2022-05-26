import React, { useEffect, useContext } from "react";
import axios from "axios";
import { userContext } from "../App";

const FetchUser = ({ username }) => {
  const { setUserInfo } = useContext(userContext);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`https://api.github.com/users/${username}`)
        .then((res) => {
          setUserInfo(res.data);
        })
        .catch((e) => console.log(e));
    };
    fetchData();
  }, []);

  return <></>;
};

export default FetchUser;
