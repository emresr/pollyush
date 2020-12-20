import React, { useState, useEffects } from "react";

import { PieChart } from "react-minimal-pie-chart";
import { Link, useParams } from "react-router-dom";
import pollService from "../services/pollService";
import { useList, useListVals } from "react-firebase-hooks/database";
import Header from "./Header";

const Pollpage = () => {
  const url = useParams();

  const [options] = useListVals(pollService.getPollOptions(url.id));
  // console.log(options);

  const [voted, setVoted] = useState("");

  const [voteid, setVoteid] = useState("");
  const [newScore, setNewScore] = useState("");

  const vote = () => {
    console.log(voted.option_id);

    setVoteid(voted.option_id);
    setNewScore(voted.option_score);

    console.log(voteid);
    console.log(newScore);

    console.log(url.id);
    console.log("option" + voteid);
    pollService.voteg(url.id, voteid, newScore + 1);
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
                      onChange={() => setVoted(option)}
                    />
                    <label class="">{option.option_title}</label>
                  </div>
                ))}

              <button onClick={vote}> Vote </button>

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
