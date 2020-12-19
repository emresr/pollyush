import React, { useState, useEffects } from "react";

import { PieChart } from "react-minimal-pie-chart";
import { Link, useParams } from "react-router-dom";
import pollService from "../services/pollService";
import { useList, useListVals } from "react-firebase-hooks/database";
import Header from "./Header";

const Pollpage = () => {
  const url = useParams();

  const [options] = useListVals(pollService.getPollOptions(url.id));
  console.log(options);

  let voteId = "";

  if (voteId !== null) {
    console.log("lmao");
  }

  const handleCheckbox = () => {
    // id alınıp vote basılacak
  };

  const pollpage = (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-sm pollpage-item">
            <div className="pollpage-title">
              <h2>{}</h2>

              {options &&
                options.map((option, index) => (
                  <div key={option.option_id}>
                    <input
                      class="pollpage-check"
                      type="checkbox"
                      checked={voteId === option.option_id}
                      onChange={handleCheckbox}
                    />
                    <label class="">{option.option_title}</label>
                  </div>
                ))}

              <button> Vote </button>

              <Link className="btn result-button" to={`/result/${url.id}`}>
                Result
              </Link>
              <button>Copy text</button>
              <h1>Share On Twitter </h1>
              <h1>Share On Dis </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return <>{pollpage}</>;
};
export default Pollpage;
