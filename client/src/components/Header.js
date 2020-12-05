import React, {  } from "react"
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="header">
			                 <Link className="btn list-link" to={`/`}>
                                        <h1>Polly </h1>
                   </Link>
			<h4 className="text-center mb-4">
				<i>A poll app built with React </i>
			</h4>
		</div>
	)
}

export default Header
