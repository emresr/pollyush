import React, { Fragment } from "react";
import Input from "./Input.js";
import List from "./List.js";

import { useParams } from "react-router-dom";

import pollService from "../services/pollService";
import { useList, useListVals } from "react-firebase-hooks/database";

import { PieChart } from "react-minimal-pie-chart";

const Result = () => {
  const url = useParams();

  const getResults = [
    { title: "One", value: 10, color: "#E38627" },
    { title: "Two", value: 15, color: "#C13C37" },
  ];

  const [options] = useListVals(pollService.getPollOptions(url.id));
  console.log(options);

  return (
    <>
      <div className="col-sm chart">
        <PieChart viewBoxSize="[150,150]" data={getResults} />
      </div>
    </>
  );
};

export default Result;
