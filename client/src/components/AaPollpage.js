import React, { useState,useEffects } from "react";
import pollService  from "../services/pollService";
import { useList } from "react-firebase-hooks/database";
import { useParams, Link } from "react-router-dom";




const AaPollpage = () => {
  const id = useParams();
console.log(id.id)
  const [polls] = useList(pollService.getOne(id.id));
console.log(polls)
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
                {poll.val().title}-
                {index}
              </li>
            ))}
        </ul>

      </div>
      
    </div>
  );
};

export default AaPollpage