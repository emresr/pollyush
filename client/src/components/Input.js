import React, { useState} from "react"

const Input = () => {
  const [title, setTitle] = useState("")
  const [option, setOption] = useState([])
  


return ( 
  
      <div class="col-sm input">

      <form className="poll-form ">
        <input
        className="form-control"
        size="50"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
        className="form-control"

          type="text"
          value={option}
          onChange={e => setOption(e.target.value)}
          placeholder="Option"
        />

        <button  type="submit" >
         Mf
        </button>
      </form>
    </div>
  )
}

export default Input
