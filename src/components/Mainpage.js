import React, { Fragment } from "react";
import Input from "./Input.js";
import List from "./List.js";

const Mainpage = () => {
  return (
    <div className="grid grid-cols-12 py-3">
      <Input />
      <List />
    </div>
  );
};

export default Mainpage;
