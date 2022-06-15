import React, { useState } from "react";
import FetchUser from "../components/FetchUser";
const GetName = () => {
  const [username, setUsername] = useState("");
  const [input, setInput] = useState("");
  return (
    <div>
      <div className="text-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-2xl min-w-fit">
        <div className="justify-self-center items-center m-2">
          <input
            className="py-4 px-4 text-skin-dark border-2 border-gray-500 rounded-xl appearance-none text-xl"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Entry your Github username"
          />

          <div
            className="button m-2 px-4 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 inline-block font-bold uppercase text-lg mt-4 text-center cursor-pointer w-36"
            onClick={() => {
              setUsername(input);
            }}
          >
            Submit
          </div>
        </div>
        <div className="block">
          {username && <FetchUser username={username} />}
        </div>
      </div>
    </div>
  );
};

export default GetName;
