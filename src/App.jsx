import React, { createContext, useEffect, useState } from "react";
import GetName from "./pages/GetName";
import Profile from "./pages/Profile";

export const userContext = createContext();
const App = () => {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <div>
      <userContext.Provider value={{ userInfo, setUserInfo }}>
        {userInfo ? <Profile /> : <GetName />}
      </userContext.Provider>
    </div>
  );
};

export default App;
