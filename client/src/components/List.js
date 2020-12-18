import React, { useState, useEffect} from "react"
import {Link,useParams} from "react-router-dom"
import pollService  from "../services/pollService";
import { useList,useListVals } from "react-firebase-hooks/database";


const List = () => {
  const [polls] = useListVals(pollService.getAll());

  console.log(polls)
  return (
<div class="col-sm">
     <h6 className="list-title"> Latest Polls</h6>

     <div  className="list-item">
                      <Link className="btn list-link" to={`/poll/-MOmLgm9Ceky4DqUl2bj`}>

       <h1 className="item-title">Title 1111 </h1>
                         </Link>

       <h3 className="item-option">Option </h3> 
    </div>



          {            polls &&
            polls.map((poll, index) => (
                <div key={polls.poll_id} className="list-item">
                 <Link className="btn list-link" to={`/poll/${poll.key} `}>
                                        <h1>{poll.title} </h1>
                   </Link>
          </div>

    ))}
    </div>
  )
}

export default List
