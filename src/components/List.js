import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import pollService from "../services/pollService";
import { useList, useListVals } from "react-firebase-hooks/database";

const List = () => {
  const [polls, loading] = useList(pollService.getLatest());
  polls.reverse();

  const Winnerid = (key) => {
    const [optiony] = useListVals(pollService.getWinnerOption(key));
  };

  const list = (
    <div class="col-span-6 ">
      <h6 className="text-5xl text-extrabold text-center">Latest Polls</h6>
      <div>
        {loading && <div />}

        {!loading &&
          polls &&
          polls.map((poll, index) => {
            return (
              <div
                key={polls.poll_id}
                className="border-2 border-yellow-300 my-2 p-2 rounded-lg bg-green-500 hover:bg-green-600"
              >
                <Link className="" to={`/poll/${poll.key}`}>
                  <span className="text-2xl">{poll.val().title} </span>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
  return <> {list} </>;
};

export default List;
