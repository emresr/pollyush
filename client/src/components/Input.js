import React, { useState} from "react"
import Pollapi from "./api/Pollapi"

const Input = () => {
  const [title, setTitle] = useState("")
  const [option, setOption] = useState("{}")
    const [score, setScore] = useState("{}")
  

const handleSubmit =  async (e) => {
   e.preventDefault()
   try {
     const response = await  Pollapi.post("/",{ 
        title,
        option,
        score
     })   
     console.log(response)
   } catch (err) {

   }
}

return ( 
  
      <div class="col-sm input">

      <form className="form-style-6 ">
        <input
        size="50"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          value={option}
          onChange={e => setOption(e.target.value)}
          placeholder="Option"
        />
        <input
          type="text"
          value={score}
          onChange={e => setScore(e.target.value)}
          placeholder="Score"
        />
        <button onClick={handleSubmit} type="submit" >
         Mf
        </button>
      </form>
    </div>
  )
}

export default Input
