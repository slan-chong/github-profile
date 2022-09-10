import React, { createContext, useState } from "react";
import GetName from "./pages/GetName";
import Profile from "./pages/Profile";
import FetchUser from "./components/FetchUser";
import { Routes, Route } from "react-router-dom";
import ErrorText from "./components/ErrorText";

export const userContext = createContext();
export const errorContext = createContext();
const App = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  return (
    <userContext.Provider value={{ userInfo, setUserInfo }}>
      <errorContext.Provider value={{ errorInfo, setErrorInfo }}>
        <div className="flex flex-col justify-center content-center flex-wrap min-h-screen">
          <Routes>
            <Route path="/" element={<GetName />} />
            <Route
              path="/:paramsName"
              element={userInfo ? <Profile /> : <FetchUser />}
            />
          </Routes>
          {!userInfo && <ErrorText errorInfo={errorInfo} />}
        </div>
      </errorContext.Provider>
    </userContext.Provider>
  );
};

export default App;
