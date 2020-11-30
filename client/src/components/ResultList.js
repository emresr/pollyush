import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { PieChart } from "react-minimal-pie-chart";

const ResultList = () => {
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


const k = [{title : "Whats your favor?", option: [{option_id:1,option:"lmdao",score:15},{option_id:2,option:"lmaorrrr",score:15}] }]
const score = 				   k.map(k=> ( 
				  k.option.map((option) => ( option[1]

        ))        
		))
                console.log(score)


const pollpage = (
      <div className="container">
		<div className="row">
			<div className="col-sm pollpage-item">
				<div className="pollpage-title">
				{k.map(k=> ( 
                    <h2>{k.title}</h2>
					))}

				    {k.map(k=> ( 
				  k.option.map(option => (

				  <div  key={option.option_id}>
                  <label class="">{option.option}</label>

                  </div>

                   ))        
					))} 
                
				</div>
            </div>
             
               {k.map(k=> ( 
	  k.option.map(option => (

           <div className="col-sm" key={option.option_id}>
                    
					<PieChart
						viewBoxSize="[10,10]"
						data={[
							{ title: "One", value: 15, color: "#E38627" },
							{ title: "Two", value: 15, color: "#C13C37" },
							{ title: "Three", value: 15, color: "#6A2135" },
						]}
					/>
				 </div>
				 )) 
                 	))} 
	  }

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
export default ResultList;
