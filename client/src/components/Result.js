import React, { Fragment } from "react"
import Input from "./Input.js"
import List from "./List.js"


const Result = () => {
	return (
		<>
		<div className="container">
		 <div className="row">
				<ResultList />
				<Chart />
			</div>
			</div>
		</>
	)
}

export default Result
