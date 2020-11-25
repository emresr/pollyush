import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";

const PollPage = () => {
	const [polls,setPolls] = useState([]);
	
	const [count, setCount] = useState(0);
	const id = useParams();


	const getPolls = async () => {
		try {
			const response = await fetch(
				`http://localhost:5000/polls/${id.id}`
			);
			const jsonData = await response.json();

			setPolls(jsonData)
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getPolls();
	}, []);

console.log(polls)

	const pollpage = (
      <div className="container">
		<div className="row">
			<div className="col-sm">
				<div className="pollpage">
					<h1 className="pollpage-title">Whats your favor?</h1>
					<h3>Toplam Oy Sayısı:300</h3>
					<div>
						<h5>Pizza - %50</h5>
						<h5>Hamburger - %50</h5>
						<h5>Lahmacun - %50</h5>
						<h5>HotDog - %50</h5>
					</div>
				</div>
            </div>
            
				<div className="col-sm chart">
					<PieChart
						viewBoxSize="[30,30]"
						data={[
							{ title: "One", value: 10, color: "#E38627" },
							{ title: "Two", value: 15, color: "#C13C37" },
							{ title: "Three", value: 20, color: "#6A2135" },
						]}
					/>
				</div>
			
	   {/*
            <div className="col-sm ">
				<div className="poll-infos">
					<h1 className="infos-title">{polls.title}</h1>
					<h3>Toplam Oy Sayısı:300</h3>
					<div>
						<h5>{polls.option} - %50</h5>
					</div>
				</div>
            </div>
            
				<div className="col-sm">
					<PieChart
						viewBoxSize="[10,10]"
						data={[
							{ title: "One", value: 10, color: "#E38627" },
							{ title: "Two", value: 15, color: "#C13C37" },
							{ title: "Three", value: 20, color: "#6A2135" },
						]}
					/>
				</div>
      */}
			
		</div>
	  </div>
	);

	return <>
	{pollpage}

	</>;
};
export default PollPage;
