import React, { Fragment } from "react"
import "./App.css"

import Header from "./components/Header"
import Mainpage from "./components/Mainpage"

function App() {
	return (
		<Fragment>
			<div >
				<Header />
				<Mainpage />
			</div>
		</Fragment>
	)
}

export default App
