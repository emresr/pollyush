import React, { Fragment, useState, useEffect } from "react";
import Input from "./Input.js";
import List from "./List.js";

import { useParams } from "react-router-dom";

import pollService from "../services/pollService";
import { useList, useListVals } from "react-firebase-hooks/database";

import { PieChart } from "react-minimal-pie-chart";

const Chart = () => {
  const url = useParams();
  const [options] = useListVals(pollService.getPollOptions(url.id));
  // console.log(options);

  const chartItem = {
    title: "",
    value: "",
    color: "#C13C37",
  };

  const [chart, setChart] = useState(chartItem);

  //one item to chart

  let lmao = [];

  console.log(lmao);
  const handleChart = () => {
    {
      options &&
        options.forEach((option, index) => lmao.push(option.option_score));
    }
    console.log(lmao);
  };

  const getResults = [
    { title: "One", value: 15, color: "#E38627" },
    { title: "Two", value: 15, color: "#C13C37" },
  ];

  return (
    <>
      <div className="col-sm chart">
        <PieChart viewBoxSize="[150,150]" data={getResults} />
        <input type="button" value="getir pls" onClick={handleChart} />
      </div>
    </>
  );
};
export default Chart;
