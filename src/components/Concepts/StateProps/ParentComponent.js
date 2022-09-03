import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [username, setUsername] = useState("name");
  const [password, setPassword] = useState("pass");

  return (
    <div className="container">
      <div className="py-4">
        <h1>ParentComponent Page</h1>
        {username} -{password}
        <ChildComponent setUsername={setUsername} setPassword={setPassword} />
      </div>
    </div>
  );
};

export default ParentComponent;
