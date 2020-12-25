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
  let colors = []
  options.forEach((option) => scores.push(option.option_score));
  options.forEach((option) => titles.push(option.option_title));
  options.forEach( option => colors.push("#"+Math.floor(Math.random()*16777215).toString(16)));

const score = {
  labels: titles ,
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: colors,
      borderColor: '#f1f1f1',
      borderWidth: 0.5,
      data:scores ,
    }
  ]
}

  return (
    <>
      <div className="col-sm-4 chart">
        <Pie
          data={score}
          width={"300px"}
          height={"300px"}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            },
            maintainAspectRatio: true 
          }}
          
                  />
      </div>
    </>
  );
};
export default Chart;
