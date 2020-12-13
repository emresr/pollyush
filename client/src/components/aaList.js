import React, { useState,useEffects } from "react";
import pollService  from "../services/pollService";
import { useList } from "react-firebase-hooks/database";




const AaList = () => {

const [polls,loading,error] = useList(pollService)


  return(
    <>
        <ul className="list-group">
          {            polls &&
            polls.map((poll, index) => (
              <li
                className={"list-group-item"}
          //      onClick={() => setActiveTutorial(poll, index)}
                key={index}
              >
                {poll.val().title}
                {/* poll.title */}
              </li>
            ))}
        </ul>

</>
    )
 }


export default AaList;