import React, { useState, useEffect} from "react"

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
  
console.log(polls)
  return (
    <div>

    {polls.map(polls => (
    <div key={polls.poll_id} className="list-item">
      <h1>{polls.title} </h1>
      <h1>{polls.option} </h1> 
    </div>

    ))}
     </div>
  )
}

export default List
