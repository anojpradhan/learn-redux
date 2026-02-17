import React, { useState } from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state);
  return (
    <div className="desc">
      <h1>This is a simple counter apps</h1>
      <div>Count : {count}</div>
    </div>
  );
};

export default Counter;
