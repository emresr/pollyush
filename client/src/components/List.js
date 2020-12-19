import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import pollService from "../services/pollService";
import { useList, useListVals } from "react-firebase-hooks/database";

const List = () => {
  const [polls] = useList(pollService.getAll());

  const [polls1] = useList(pollService.getAll());
  console.log(polls1[0]);
  return (
    <div class="col-sm">
      <h6 className="list-title"> Latest Polls</h6>

      <div className="list-item">
        {/*
        <Link className="btn list-link" to={`/poll/-MOffQFTdecvdlzCctQt`}>
              {polls &&
        polls1.map((poll, index) => (
          <h1 className="item-title"> {poll.key}</h1>
                  ))}

        </Link>
         */}
        <h3 className="item-option">Option </h3>
      </div>

      {polls &&
        polls.map((poll, index) => (
          <div key={polls.poll_id} className="list-item">
            <Link className="btn list-link" to={`/poll/${poll.key}`}>
              <a target="_blank">
                <h1>{poll.val().title} </h1>
              </a>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default List;
