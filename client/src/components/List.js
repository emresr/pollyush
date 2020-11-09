import React, { useState, useEffect } from "react"

const List = () => {
  const [todos, setTodos] = useState([])

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todo/todos/${id}`, {
        method: "DELETE",
      })

      setTodos(todos.filter((todo) => todo.todo_id !== id))
    } catch (err) {
      console.error(err.message)
    }
  }

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todo/todos")
      const jsonData = await response.json()

      setTodos(jsonData)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])

  console.log(todos)

  return (
    <div className="list-item">
      <h1>Title %40</h1>
      <p>Chosen One </p>
    </div>
  )
}

export default List
