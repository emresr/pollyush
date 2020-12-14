import React, { useState,useEffects } from "react";
import pollService  from "../services/pollService";
import { useList,useListVals } from "react-firebase-hooks/database";




const AaList = () => {
  const [polls] = useListVals(pollService.getAll());
console.log(polls)
  return (
    <div className="list row">
      <div className="col-md-6">
        

      </div>
      
    </div>
  );
};

export default AaList;