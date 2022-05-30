import React, { createContext, useState } from "react";
import GetName from "./pages/GetName";
import Profile from "./pages/Profile";
import FetchUser from "./components/FetchUser";
import { Routes, Route } from "react-router-dom";

export const userContext = createContext();
const App = () => {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <div>
      <userContext.Provider value={{ userInfo, setUserInfo }}>
        <Routes>
          <Route path="/" element={userInfo ? <Profile /> : <GetName />} />
          <Route
            path="/:paramsName"
            element={userInfo ? <Profile /> : <FetchUser />}
          />
        </Routes>
      </userContext.Provider>
    </div>
  );
};

export default App;
