import React, { useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { userContext, errorContext } from "../App";

const FetchUser = ({ username }) => {
  const { setUserInfo } = useContext(userContext);
  const { setErrorInfo } = useContext(errorContext);
  const navigate = useNavigate();
  const { paramsName } = useParams();
  if (paramsName) username = paramsName;
  const URL = `https://api.github.com/users/${username}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(URL);
        setUserInfo(data);
        setErrorInfo(null);
        if (!paramsName) navigate(`/${username}`);
      } catch (err) {
        setErrorInfo({ username: username, error: err });
        console.error(err);
        if (paramsName) {
          navigate("/");
        }
      }
    };
    fetchData();
  }, [username]);
  return <></>;
};

export default FetchUser;
