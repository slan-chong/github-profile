import React, { useContext } from "react";
import { userContext } from "../App";

const Profile = () => {
  const { userInfo } = useContext(userContext);
  return <div className="text-center">{JSON.stringify(userInfo)}</div>;
};

export default Profile;
