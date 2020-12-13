import React, { useState } from "react";
import pollService  from "../services/pollService";



const AaInput = () => {

const pollsItem = {
    title:"",
    option:""
}

const [polls,setPolls] = useState(pollsItem)

 const handleInput = e => {
    const { name, value } = e.target;
    setPolls({ ...polls, [name]: value });
  };

const save = () => {
	var data = {
		title : polls.title,
		option : polls.option
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