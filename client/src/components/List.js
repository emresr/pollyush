import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import pollService from "../services/pollService";
import { useList, useListVals } from "react-firebase-hooks/database";

const List = () => {
  const [polls, loading] = useList(pollService.getLatest());
   polls.reverse()

  const key = "-MPEs98o0RMnODbu0vAk";
  const [optiony] = useListVals(pollService.getWinnerOption(key));
  console.log(optiony);

  return (
    <div class="col-sm">
      <h6 className="list-title"> Latest Polls</h6>
      {loading && <div class="spinner-border text-danger" />}

      {!loading &&
        polls &&
        polls.map((poll, index) => (
          <div key={polls.poll_id} className="list-item">
            <Link className="btn list-link" to={`/poll/${poll.key}`}>
              <h1>{poll.val().title} </h1>
              <h3 className="item-option">Option </h3>
              <div class="progress progress-striped active">
                <div
                  class="progress-bar progress-bar-info"
                  style={{ width: "80%" }}
                />
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default List;
