import React, { useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { userContext } from "../App";

const Language = (props) => {
  const [data, setData] = useState([]);
  const languages_url = props.languages_url;

  const handleRequest = useCallback(async () => {
    try {
      const response = await axios.get(languages_url);
      return setData(response.data);
    } catch (err) {
      console.error(err.message);
    }
  }, [languages_url]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const array = [];
  let total_count = 0;
  for (let index in data) {
    array.push(index);
    total_count += data[index];
  }

  return (
    <div className="mt-2 mb-2">
      Languages:{" "}
      {array.length
        ? array.map((language, index) => (
            <div className="inline bg-gray-400  rounded-xl p-1 m-1" key={index}>
              {`${language}: ${
                Math.trunc((data[language] / total_count) * 1000) / 10
              }% `}
            </div>
          ))
        : "code yet to be deployed."}
    </div>
  );
};

const Profile = () => {
  const { userInfo, setUserInfo } = useContext(userContext);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    // const numberOfPages =
    //   userInfo.public_repos / 100 > 0 ? Math.ceil(userInfo.public_repos) : null;
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${userInfo.repos_url}?&per_page=50`);
        setRepos(data);
        setLoading(false);
      } catch (err) {
        console.log(err.response);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans m-3">
      <div className="sm:flex bg-gray-800 rounded-xl p-6 shadow-2xl max-w-2xl">
        <div className="flex min-w-fit items-center justify-center">
          <a href={userInfo.html_url}>
            <img
              className="h-36 w-36 rounded-full border-4 bg-skin-button-border"
              src={userInfo.avatar_url}
              alt={userInfo.login}
            />
          </a>
        </div>

        <div>
          <div className="ml-4">
            <a
              href={userInfo.html_url}
              className="text-2xl font-bold text-skin-light"
            >
              {userInfo.login}
            </a>
            <div className="text-skin-info">
              Latest Push :
              {new Date(
                Math.max(...repos.map((e) => new Date(e.pushed_at)))
              ).toLocaleString()}
            </div>
          </div>
          {loading ? (
            <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-slate-700 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            repos.map((repo) => {
              if (!repo.fork) {
                return (
                  <div
                    key={repo.id}
                    className="bg-skin-button-night inline-block px-2 py-1 mx-2 mb-2 decoration-0 rounded-xl hover:bg-skin-button-night-hover relative flex-col items-center group"
                    onMouseEnter={() => setIsShown(true)}
                  >
                    <a href={repo.html_url}>
                      <div>{repo.name}</div>
                    </a>

                    {isShown && (
                      <div className="absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex">
                        <div className="rounded mb-5 relative z-10 p-4 text-sm leading-none text-white whitespace-nowrap bg-skin-button-night-hover shadow-lg">
                          {repo.description && (
                            <div className="font-medium text-base">
                              {repo.description}
                            </div>
                          )}
                          <Language languages_url={repo.languages_url} />
                          <div>{`Updated on ${new Date(
                            repo.pushed_at
                          ).toLocaleString()}`}</div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              } else {
                return null;
              }
            })
          )}
        </div>
      </div>

      <NavLink to="/">
        <div
          className="absolute top-4 right-4 w-20 h-20 text-4xl text-skin-base cursor-pointer flex items-center justify-center bg-skin-button-day rounded-full p-3 hover:bg-skin-button-day-hover"
          onClick={() => {
            setUserInfo(null);
          }}
        >
          ←
        </div>
      </NavLink>
    </div>
  );
};

export default Profile;
