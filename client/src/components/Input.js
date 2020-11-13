import React, { useState, useEffect } from "react"

const Input = () => {
  const [inputs, setInputs] = useState({
    title: "999",
    option: "099",
  })

  function handleChange(evt) {
    const value = evt.target.value
    setInputs({
      ...inputs,
      [evt.target.name]: value,
    })
  }

  return (
    <div class="form-style-6">
      <form>
        <input
          type="text"
          value={inputs.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          type="text"
          value={inputs.option}
          onChange={handleChange}
          placeholder="Title"
          placeholder="Option"
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default Input
