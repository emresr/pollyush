import React, { Fragment } from "react";

import ResultList from "./ResultList.js";
import Chart from "./Chart.js";

const Result = () => {
  return (
    <div className="grid grid-cols-12">
      <ResultList />
      <Chart />
    </div>
  );
};

export default Result;
