import React, { useState,useEffects } from "react";
import pollService  from "../services/pollService";
import { useList,useListVals } from "react-firebase-hooks/database";




const CcPollpage = () => {
  const [polls] = useListVals(pollService.getAll());
console.log(polls)
  const k = polls[0]
  console.log(k)
  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Polls List</h4>
        <ul className="list-group">
          {            polls &&
              <li
                className={"list-group-item "}
  
              >
                {polls.title}-
              </li>
            }
                            </ul>   



      </div>
      
    </div>
  );
};

export default CcPollpage;