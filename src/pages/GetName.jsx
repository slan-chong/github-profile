import React, { useState } from "react";
import FetchUser from "../components/FetchUser";
const GetName = () => {
  const [username, setUsername] = useState("");
  const [input, setInput] = useState("");
  return (
    <div>
      <div className="p-2 ">
        <input
          className="px-4 py-3 border-2 border-gray-500 rounded"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Add Name..."
        />
        <button
          onClick={() => setUsername(input)}
          className="px-4 py-3 m-2 border-2 border-gray-500 rounded"
        >
          Submit
        </button>
      </div>
      {username && <FetchUser username={username} />}
    </div>
  );
};

export default GetName;
