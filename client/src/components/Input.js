import React, { useState, useEffect } from "react"

const Input = () => {
  const [title, setTitle] = useState("")

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const body = { title }
      const response = await fetch("http://localhost:5000/todo/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      window.location = "/"
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <div class="form-style-6">
      <form>
        <input type="text" name="field1" placeholder="Title" />
        <input type="email" name="field2" placeholder="Option" />
        <input type="submit" value="Send" />
      </form>
    </div>

    /* <div>
      <form onSubmit={onSubmitForm}>
        <h2>Title: </h2>
        <input
          type="text"
          className="poll-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <h2>Vote1: </h2>
        <input
          type="text"
          className="poll-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button className="btn btn-success addbttn">Add</button>
      </form>
    </div>
    */
  )
}

export default Input
