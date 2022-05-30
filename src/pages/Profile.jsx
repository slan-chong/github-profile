import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { userContext } from "../App";

const Profile = () => {
  const { userInfo, setUserInfo } = useContext(userContext);
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(userInfo.repos_url);
        setRepos(data);
      } catch (err) {
        console.log(err.response);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans">
      <div className="flex bg-gray-800 rounded-xl p-6 shadow-2xl max-w-2xl">
        <div className="flex min-w-fit items-center justify-center">
          <a href={userInfo.html_url}>
            <img
              className="h-36 w-36 rounded-full border-4 border-sky-500"
              src={userInfo.avatar_url}
              alt={userInfo.login}
            />
          </a>
        </div>

        <div>
          <div className="text-2xl font-bold text-skin-light m-4">
            <a href={userInfo.html_url}>{userInfo.login}</a>
          </div>
          {repos.map((repo) => {
            return (
              <div
                key={repo.id}
                className="bg-skin-button-night inline-block px-2 py-1 mx-2 mb-2 decoration-0 rounded-xl hover:bg-skin-button-night-hover"
              >
                <a href={repo.html_url}>
                  <div>{repo.name}</div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="absolute top-4 right-4 w-5 h-5 text-xl text-skin-base cursor-pointer flex items-center justify-center bg-skin-button-day rounded-full p-3"
        onClick={() => {
          setUserInfo(null);
        }}
      >
        <NavLink to="/">←</NavLink>
      </div>
    </div>
  );
};

export default Profile;
