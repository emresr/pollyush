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
  console.log(sum(scores))

  const resultlist = (
    <div>

          <div className="col-sm-8  result-item">
            <div className="result-title">
              {options &&
                options.map((option, index) => (
                  <div key={option.option_id}>
                    <div key={option.option_id}>
                      <label class="">
                        {option.option_title}-{option.option_score}
                      </label>
                      <div class="progress progress-striped active ">
                        <div
                          class="progress-bar progress-bar-info progress-item"
                          style={{ width: `${(100*option.option_score/sum(scores))}%` }}
                        />
                      </div>
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
