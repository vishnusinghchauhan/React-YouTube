import React from "react";

const ChildComponent = (props) => {
  console.log("props in child ", props);
  return (
    <div className="container">
      <div className="py-4">
        <h1>ChildComponent Page</h1>
        <input
          placeholder="user name"
          name="username"
          onChange={(event) => {
            props.setUsername(event.target.value);
          }}
        />
        <br />
        <br />
        <input
          placeholder="user pass"
          name="password"
          onChange={(event) => {
            props.setPassword(event.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default ChildComponent;
