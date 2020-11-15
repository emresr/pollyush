import React, { useState, useEffect } from "react"
import { useParams} from 'react-router-dom'
import { PieChart } from "react-minimal-pie-chart"

const PollPage = () => {
	const [polls,setPolls] = useState([]);
const idurl =useParams()
console.log(idurl)

  const getPolls = async () => {
    try {
      const response = await fetch('http://localhost:5000/polls/${idurl}')
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
		<div className="pollpage" key={polls.idurl}>
			<div className="poll-infos">
				<h1 className="infos-title">{polls.title}</h1>
				<h3>Toplam Oy Sayısı:300</h3>
				<h5>{polls.option} - %50</h5>
				<h5>Option2 75 - %30 </h5>
				<h5>Option3 50 - %20</h5>
			</div>
			<div className="chart">
				<PieChart
					viewBoxSize="[10,10]"
					data={[
						{ title: "One", value: 10, color: "#E38627" },
						{ title: "Two", value: 15, color: "#C13C37" },
						{ title: "Three", value: 20, color: "#6A2135" },
					]}
				/>
			</div>
		</div>
		    ))}
		    </div>
	)
}

export default PollPage
