import React, { useState } from "react";
import FetchUser from "../components/FetchUser";
const GetName = () => {
  const [username, setUsername] = useState("");
  const [input, setInput] = useState("");
  return (
    <div>
      <div className="m-2 text-center">
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
      {username && <FetchUser username={username} />}
    </div>
  );
};

export default GetName;
