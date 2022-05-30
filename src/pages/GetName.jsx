import React, { useState } from "react";
import FetchUser from "../components/FetchUser";
const GetName = () => {
  const [username, setUsername] = useState("");
  const [input, setInput] = useState("");
  return (
    <div>
      <div className="text-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex m-2">
          <input
            className="px-4 text-skin-dark border-2 border-gray-500 rounded-xl appearance-none w-full text-xl"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Entry your Github username"
          />
          <div
            className="px-4 py-3 m-2 border-2 text-xl cursor-pointer bg-skin-button-day hover:bg-skin-button-day-hover rounded-xl"
            onClick={() => {
              setUsername(input);
            }}
          >
            Submit
          </div>
        </div>
        {username && <FetchUser username={username} />}
      </div>
    </div>
  );
};

export default GetName;
