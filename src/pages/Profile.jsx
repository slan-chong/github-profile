import React, { useContext } from "react";
import { userContext } from "../App";

const Profile = () => {
  const { userInfo } = useContext(userContext);
  return <div>{JSON.stringify(userInfo)}www</div>;
};

export default Profile;
