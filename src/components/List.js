import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import pollService from "../services/pollService";
import { useList, useListVals } from "react-firebase-hooks/database";

const List = () => {
  const [polls, loading] = useList(pollService.getLatest());
  polls.reverse();



  const Winnerid = (key) => { 
  const [optiony] = useListVals(pollService.getWinnerOption(key));
  
  }

const list = ( 
<div class="col-sm list">
      <h6 className="list-title">Latest Polls</h6>
      <div>
      {loading && <div class="spinner-border text-danger" />}

      {!loading &&
        polls &&
        polls.map((poll, index) => { 
          return ( 
          <div key={polls.poll_id} className="list-item">
            <Link className="btn list-link" to={`/poll/${poll.key}`}>
              <h1>{poll.val().title} </h1>
             </Link>

          </div>
          );
})}
      </div>

    </div>
)
  return (
    <> {list} </>
  );
};

export default List;
