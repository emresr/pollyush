import React, { Fragment, useState, useEffect } from "react";

import {Pie} from "react-chartjs-2";


import { useParams } from "react-router-dom";
import pollService from "../services/pollService";
import { useList, useListVals } from "react-firebase-hooks/database";



const Chart = () => {
    const url = useParams();
  const [options] = useListVals(pollService.getPollOptions(url.id));
  const title = useListVals(pollService.getPollTitle(url.id));
  console.log(title)
 // console.log(options);

  const blankResult = { title: "", value: "", color: "#E38627" };
  const [resultState, setResultState] = useState([{ ...blankResult }]);

  const addResult = () => {
    setResultState([...resultState, { ...blankResult }]);
  };

 // console.log(resultState)

  let titles = []
  let scores = []
  options.forEach((option, index) => scores.push(option.option_score));
  options.forEach((option, index) => titles.push(option.option_title));
  
const score = {
  labels: titles ,
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data:scores ,
    }
  ]
}
//console.log(state)

  return (
    <>
      <div className="col-sm chart">
      <Pie
          data={score}
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

        <input type="button" value="getir pls"  />
      </div>
    </>
  );
};
export default Chart;
