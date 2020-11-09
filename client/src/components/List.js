import React, { useState, useEffect , Fragment} from "react"

const List = () => {
  const [polls, setPolls] = useState([])


  const getPolls = async () => {
    try {
      const response = await fetch("http://localhost:5000/polls")
      const jsonData = await response.json()

      setPolls(jsonData)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getPolls()
  }, [])

  return (
    <div>

    {polls.map(polls => (
    <div key={polls.poll_id} className="list-item">
      <h1>{polls.title} </h1>
      <p>{polls.option} </p>
    </div>

    ))}
     </div>
  )
}

export default List
