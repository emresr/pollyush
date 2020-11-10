import React from "react"
import CakeChart from "cake-chart"

const PollPage = () => {
	const TREE = {
		value: 100,
		label: "SUM = 100",
		children: [
			{
				value: 50,
				children: [
					{
						value: 10,
					},
					{
						value: 20,
					},
				],
			},
			{
				value: 30,
			},
			{
				value: 20,
			},
		],
	}
	return (
		<div className="pollpage">
			<div className="poll-infos">
				<h1>Title</h1>
				<h3>Toplam Oy Sayısı:300</h3>
				<h5>Option1 175 - %50</h5>
				<h5>Option2 75 - %30 </h5>
				<h5>Option3 50 - %20</h5>
				<CakeChart data={TREE} />
			</div>
		</div>
	)
}

export default PollPage
