import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import pollService from "../services/pollService";
import { useList, useListVals } from "react-firebase-hooks/database";

const ResultList = () => {
  const url = useParams();

  const [options] = useListVals(pollService.getPollResult(url.id));
  options.reverse();
  //console.log(options);
  let scores = []
  options.forEach((option, index) => scores.push(option.option_score));
  function sum(score) {
    return score.reduce((a, b) => a + b, 0);
  }
  const allvotes = sum(scores)

  const resultlist = (
    <div>

          <div className="col-sm-4 result-item">
            <div className="result-title">
              <h1>{sum(scores)}</h1> 
              {options &&
                options.map((option, index) => (
                    <div key={option.option_id}>
                      <label class="">
                        {option.option_title}-{option.option_score}
                      </label>
                      <div class="progress progress-striped active progress-div">
                        <div
                          class="progress-bar progress-bar-info progress-item"
                          style={{ width: `${(100*option.option_score/sum(scores))}%` }}
                        > {Math.round((100*option.option_score/allvotes))}% </div>
                      </div>
                  </div>
                ))}
          
        </div>
      </div>
    </div>
  );

  return <>{resultlist}</>;
};
export default ResultList;
