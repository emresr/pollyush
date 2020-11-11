import React,{useState,useEffect} from "react"
import { PieChart } from "react-minimal-pie-chart"


const PollPage = () => {
	//const [polls,setPolls] = useState([]);

	return (

		<div className="pollpage">
			<div className="poll-infos">
				<h1 className="infos-title">Title</h1>
				<h3>Toplam Oy Sayısı:300</h3>
				<h5>Option1 165 - %50</h5>
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
	)
}

export default PollPage
