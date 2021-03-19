import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="w-full bg-green-900 items-center justify-center flex">
        <div className="p-10">
          <h1 className="text-extrabold text-4xl">Popells </h1>
          <h4 className="text-bold text-2xl mx-auto">
            Poll app built with React
          </h4>
        </div>
      </div>
      <div className="bg-yellow-600">{children}</div>
    </div>
  );
};

export default Layout;
