import React, { useState,useEffects } from "react";
import {Link,useParams} from "react-router-dom"
import pollService  from "../services/pollService";
import { useList,useListVals } from "react-firebase-hooks/database";
import Header from "./Header"

const CcPollpage = () => {

const url = useParams();
console.log(url)

  const [polls] = useListVals(pollService.getOne(url.id));
console.log(polls)
  return (
    <>
           <Header/>
    <div className="list row">
      <div className="col-md-6">
        <h4> {polls[1]}</h4>
        <ul className="list-group">

                          <li
                className={"list-group-item "}
  
              >
                {polls[1]}
                            
              </li>
                            </ul>   




      </div>
      
    </div>
  </>
  );
};

export default CcPollpage;