import React, { Fragment } from "react"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router"

import Mainpage from "./components/Mainpage"
import PollPage from "./components/PollPage"

function App() {
	return (
		<Fragment>
			<Router>
				<Route path="/">
					<Mainpage />
				</Route>

				<Route path="/pollpage">
					<PollPage />
				</Route>
			</Router>
		</Fragment>
	)
}

export default App
