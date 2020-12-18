import React, { useState } from "react";
import pollService  from "../services/pollService";
import { useList,useListVals } from "react-firebase-hooks/database";


const Input = () => {
  const pollsItem = {
    title:"",
    option:[],
}

const [polls,setPolls] = useState(pollsItem)

 const handleInput = e => {
    const { name, value } = e.target;
    setPolls({ ...polls, [name]: value });
  };

const [len] = useListVals(pollService.getAll());

const save = () => {
   

  var data = {
    id : len.length + 1,
    title : polls.title,
    option : polls.option,

  }
    pollService.create(data) 

}



return ( 
  
      <div class="col-sm input">

      <form className="poll-form ">
        <input
        className="form-control"
        size="50"
          type="text"
          value={polls.title}
          name="title"
          onChange={handleInput}
          placeholder="Title"
        />
        <input
        className="form-control"

          type="text"
          value={polls.option}
          name="title"
          onChange={handleInput}
          placeholder="Option"
        />

        <button  onClick={save}>
         Mf
        </button>
      </form>
    </div>
  )
}

export default Input
