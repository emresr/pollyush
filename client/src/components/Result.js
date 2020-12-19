import React, { Fragment } from "react";

import ResultList from "./ResultList.js";
import Chart from "./Chart.js";

const Result = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <ResultList />
        </div>
      </div>
    </>
  );
};

export default Result;
