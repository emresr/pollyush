import React, { useState,useEffects } from "react";
import {Link,useParams} from "react-router-dom"
import pollService  from "../services/pollService";
import { useList,useListVals } from "react-firebase-hooks/database";
import Header from "./Header"

const CcPollpage = () => {

const url = useParams();


  const [options] = useListVals(pollService.getPollOptions(url.id));
console.log(options[0])

  return (
    <>
           <Header/>
    <div className="list row">
      <div className="col-md-6">
        <h4> {}</h4>
        <ul className="list-group">

                          <li
                className={"list-group-item "}
  
              >
                {}

                            
              </li>
                            </ul>         </div>
      
    </div>
  </>
  );
};

export default CcPollpage;