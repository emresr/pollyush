import React, { Fragment, useState, useEffect } from "react";
import Input from "./Input.js";
import List from "./List.js";

import { useParams } from "react-router-dom";
import { useRef } from "react"
import pollService from "../services/pollService";
import { useList, useListVals } from "react-firebase-hooks/database";

import { PieChart } from "react-minimal-pie-chart";

const Chart = () => {
    const url = useParams();
  const [options] = useListVals(pollService.getPollOptions(url.id));
  console.log(options);

  const blankResult = { title: "", value: "", color: "#E38627" };
  const [resultState, setResultState] = useState([{ ...blankResult }]);

  const addResult = () => {
    setResultState([...resultState, { ...blankResult }]);
  };
/*
  console.log(resultState)
const handleResult = () => {

    setResultState([...resultState, { ...blankResult }]);
    console.log(resultState)

     const updatedResults = [...resultState];
    updatedResults[option.option_title][e.target.className] = e.target.value;
    setResultState(updatedResults);

}
  */

//get resulta atmayı denesene
  const getResults = [
    { title: "One", value: 15, color: "#E38627" },
    { title: "Two", value: 15, color: "#C13C37" },
  ];

  return (
    <>
      <div className="col-sm chart">
        <PieChart viewBoxSize="[150,150]" data={getResults} />
        <input type="button" value="getir pls" onClick={addResult} />
      </div>
    </>
  );
};
export default Chart;
