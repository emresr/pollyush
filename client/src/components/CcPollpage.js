import React, { useState,useEffects } from "react";
import pollService  from "../services/pollService";
import { useList,useListVals } from "react-firebase-hooks/database";




const CcPollpage = () => {
  const [polls] = useListVals(pollService.getAll());
console.log(polls)
console.log(polls.length)
  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Polls List</h4>
        <ul className="list-group">
          {            polls &&
            polls.map((poll, index) => (
              <li
                className={"list-group-item "}
  
                key={index}
              >
                {poll.title}-
                {index}
              </li>
            ))}
        </ul>

      </div>
      
    </div>
  );
};

export default CcPollpage;