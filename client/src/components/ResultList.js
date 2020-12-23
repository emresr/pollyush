import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { PieChart } from "react-minimal-pie-chart";

import pollService from "../services/pollService";
import { useList, useListVals } from "react-firebase-hooks/database";

const ResultList = () => {
  const url = useParams();

  const [options] = useListVals(pollService.getPollResult(url.id));
  options.reverse();
  //console.log(options);

  const pollpage = (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm pollpage-item">
            <div className="pollpage-title">
              {options &&
                options.map((option, index) => (
                  <div key={option.option_id}>
                    <div key={option.option_id}>
                      <label class="">
                        {option.option_title}-{option.option_score}
                      </label>
                      <div class="progress progress-striped active">
                        <div
                          class="progress-bar progress-bar-info"
                          style={{width: "90%"}}
                        />
                      </div>
                    </div>
                   </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return <>{pollpage}</>;
};
export default ResultList;
