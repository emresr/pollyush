import React, {  } from "react"
import {BrowserRouter,Link,useParams} from "react-router-dom"

const Header = () => {
	return (
		<div className="header">
	
				                      <Link className="btn list-link" to={`/`}>

       <h1 className="item-title">Popells </h1>
                         </Link>
			<h4 className="text-center mb-4">
				<i>A poll app built with React </i>
			</h4>
		</div>
	)
}

export default Header
