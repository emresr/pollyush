import React, { Fragment, useState, useEffect } from "react";

import {Bar} from "react-chartjs-2";


import { useParams } from "react-router-dom";
import pollService from "../services/pollService";
import { useList, useListVals } from "react-firebase-hooks/database";

import { PieChart } from "react-minimal-pie-chart";

const Chart = () => {
    const url = useParams();
  const [options] = useListVals(pollService.getPollOptions(url.id));
 // console.log(options);

  const blankResult = { title: "", value: "", color: "#E38627" };
  const [resultState, setResultState] = useState([{ ...blankResult }]);

  const addResult = () => {
    setResultState([...resultState, { ...blankResult }]);
  };

 // console.log(resultState)

  let titles = []
  let scores = []
const handleResult = () => {

  {
    options &&
      options.forEach((option, index) => titles.push(option.option_title));
      options.forEach((option, index) => scores.push(option.option_score));

  }
  console.log(titles);
  console.log(scores)

}
  
const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: {scores}
    }
  ]
}

//get resulta atmayı denesene
  const getResults = [
    { title: "One", value: 15, color: "#E38627" },
    { title: "Two", value: 15, color: "#C13C37" },
  ];

  return (
    <>
      <div className="col-sm chart">
      <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

        <PieChart viewBoxSize="[150,150]" data={getResults} />
        <input type="button" value="getir pls" onClick={handleResult} />
      </div>
    </>
  );
};
export default Chart;
