import React, { Fragment } from "react"
import Input from "./Input.js"
import List from "./List.js"

import { Doughnut } from 'react-chartjs-2';

const Result = () => {
	return (
		<>
		  <div className="col-sm chart">
					<PieChart
						viewBoxSize="[150,150]"
						data={[
							{ title: "One", value: 10, color: "#E38627" },
							{ title: "Two", value: 15, color: "#C13C37" },
							{ title: "Three", value: 20, color: "#6A2135" },
						]}
					/>
				</div>
	    </>
	)
}

export default Result
