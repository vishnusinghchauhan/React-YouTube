import React, { useState } from "react";

const ConditionalRendring = (props) => {
  const [status, setStatus] = useState(false);
  const [counter, setCounter] = useState(0);

  const displayMethodOne = () => {
    if (status) {
      return <ComponetLogin />;
    } else {
      return <ComponetLogout />;
    }
  };

  const displayMethodTwo = () => {
    return status ? <ComponetLogin /> : <ComponetLogout />;
  };

  const displayMethodThree = () => {
    return status && <ComponetLogin />;
  };

  const displayMethodFour = () => {
    switch (counter) {
      case 1:
        return <ComponetLogin />;
      case 2:
        return <ComponetLogout />;
      default:
        return <ComponetLogout />;
    }
  };

  return (
    <div className="container">
      {/* Method One */}
      {/* {displayMethodOne()} */}
      {/* Method two */}
      {/* {displayMethodTwo()} */}
      {/* Method Three */}
      {/* {displayMethodThree()} */}
      {/* Method Four */}
      {displayMethodFour()}
      {/* ---- */}
      {/* <button onClick={() => setStatus(!status)}>
        Change Status
      </button> <br /> <br /> */}
      <button onClick={() => setCounter(counter + 1)}> Counter </button>
      <button onClick={() => setCounter(0)}> reset </button>
    </div>
  );
};

export default ConditionalRendring;

const ComponetLogin = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1> Login </h1>
      </div>
    </div>
  );
};

const ComponetLogout = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>Logout</h1>
      </div>
    </div>
  );
};
