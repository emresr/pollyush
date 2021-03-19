import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import pollService from "../services/pollService";
import { useList, useListVals } from "react-firebase-hooks/database";

const ResultList = () => {
  const url = useParams();

  const [title] = useListVals(pollService.getPollTitle(url.id));
  console.log(title[2]);

  const [options] = useListVals(pollService.getPollResult(url.id));
  options.reverse();

  let scores = [];

  options.forEach((option, index) => scores.push(option.option_score));
  function sum(score) {
    return score.reduce((a, b) => a + b, 0);
  }
  const allvotes = sum(scores);

  const resultlist = (
    <div className="col-span-6 ">
      <div className="result-title">
        <h1 className="resultlist-title"> {title[2]} </h1>
        <h1 className="result-score">{sum(scores)} votes</h1>
        <br />
        {options &&
          options.map((option, index) => (
            <div key={option.option_id}>
              <label>
                <p className="result-label">
                  {" "}
                  {option.option_title} - {option.option_score}{" "}
                </p>
              </label>
              <div class="progress progress-striped active progress-div">
                <div
                  class="progress-bar progress-bar-info progress-item"
                  style={{
                    width: `${(100 * option.option_score) / sum(scores)}%`,
                  }}
                >
                  {" "}
                  {Math.round((100 * option.option_score) / allvotes)}%{" "}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );

  return <>{resultlist}</>;
};
export default ResultList;
