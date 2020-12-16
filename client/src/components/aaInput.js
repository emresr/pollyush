import React, { useState } from "react";
import pollService  from "../services/pollService";
import { useList,useListVals } from "react-firebase-hooks/database";



const AaInput = () => {

const pollsItem = {
    title:"",
    option:"",
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

	return(
		<>
<input type="text" className="" value={polls.title} name="title" onChange={handleInput} />
<input type="text" className="" value={polls.option} name="option" onChange={handleInput}/>

<button onClick={save}/>

</>
		)
 }


export default AaInput;