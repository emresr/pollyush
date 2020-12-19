import React, { Fragment } from "react";

import ResultList from "./ResultList.js";
import Chart from "./Chart.js";

import Header from "./Header";

const Result = () => {
  return (
    <>
      <Header />

      <div className="container">
        <div className="row">
          <ResultList />
        </div>
      </div>
    </>
  );
};

export default Result;
