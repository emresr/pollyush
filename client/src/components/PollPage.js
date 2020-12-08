import React, { useState, useEffect } from "react";

import Header from "./Header";

import { useParams, Link } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";

const PollPage = () => {
	const [polls, setPolls] = useState([]);

	const [count, setCount] = useState();
	const id = useParams();

	const getPolls = async () => {
		try {
			const response = await fetch(
				`http://localhost:5000/polls/${id.id}`
			);
			const jsonData = await response.json();

			setPolls(jsonData);

			
			
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getPolls();
	}, []);

	console.log(polls.option);

	const k = [
		{
			title: "Whats your favor?",
			option: [
				{ option_id: 1, option: "lmdao", score: 0 },
				{ option_id: 2, option: "lmaorrrr", score: 2 },
			],
		},
	];
	const pollpage = (
		<div className="container">
			<div className="row">
				<div className="col-sm pollpage-item">
					<div className="pollpage-title">
						{k.map((k) => (
							<h2>{k.title}</h2>
						))}

						{k.map((k) => ( 
							k.option.map((option) => (
								<div key={option.option_key}>
									<input
										class="pollpage-check"
										type="checkbox"
									/>
									<label class="">{option.option}</label>
								</div>
							))
						))}
						<Link
							className="btn result-button"
							to={`/result/${id.id}`}
						>
							Result
						</Link>



						<h1>Share On Twitter </h1>
						<h1>Share On Dis </h1>
					</div>
				</div>
				{/*

						{polls.map(	polls => (
							<h2>{polls.title}</h2>
						))}


					*/}	

				{/*
            <div className="col-sm ">
				<div className="poll-infos">
					<h1 className="infos-title">{polls.title}</h1>
					<h3>Toplam Oy Sayısı:300</h3>
					<div>
						<h5>{polls.option} - %50</h5>
					</div>
				</div>

console.log(polls.score)

const pollpage = (

      <div className="container">
		<div className="row">
			<div className="col-sm pollpage-item">
				<div>
                    <h2  className="pollpage-title">{polls.title}</h2>
				  <div >
				  <input class="pollpage-check" type="checkbox"/>

				  	
                  <label class="pollpage-option">{polls.option} - {polls.score}</label>

                  </div>

				   <Link className="btn result-button" to={`/result/${id.id}`}>
                                  Result
                   </Link>
				</div>
            </div>

	   

	   {/*
            <div className="col-sm pollpage-item">
				<div className="pollpage-title">
				{k.map(k=> ( 
                    <h2>{k.title}</h2>
					))}

				    {k.map(k=> ( 
				  k.option.map(option => (

				  <div  key={option.option_key}>

				  <input class="pollpage-check" type="checkbox"/>
                  <label class="">{option.option}</label>

                  </div>

                    ))        
					))}
				   <Link className="btn result-button" to={`/result/${id.id}`}>
                                  Result
                   </Link>
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

	return (
		<>
			{pollpage}
		</>
	);
};
export default PollPage;
