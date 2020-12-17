import React, { useState,useEffects } from "react";
import pollService  from "../services/pollService";
import { useList,useListVals } from "react-firebase-hooks/database";


const CcPollpage = () => {


  const [polls] = useListVals(pollService.getOne());
console.log(polls)
  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Polls List</h4>
        <ul className="list-group">

                          <li
                className={"list-group-item "}
  
              >
              {  polls &&
            polls[2].map((poll) => (
                <h1>  {poll.q} </h1>
                        ))}
              </li>
                            </ul>   




      </div>
      
    </div>
  );
};

export default CcPollpage;