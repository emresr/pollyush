import React, { useState, useEffect } from "react"

const Input = () => {
  const [title, setTitle] = useState("")
   const [option, setOption] = useState("")

const handleSubmit =  async (e) => {
   e.preventDefault()
   try {
          const body = { title,option}
     const response = await  fetch("http://localhost:5000/polls",{ 
        method: "POST",
        title,
        option
     })   
     console.log(response)
   } catch (err) {

   }
}

return ( 

    <div class="form-style-6">
      <form>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          value={option}
          onChange={e => setOption(e.target.value)}
          placeholder="Title"
          placeholder="Option"
        />
        <button onClick={handleSubmit} type="submit" >
         Mf
        </button>
      </form>
    </div>
  )
}

export default Input
