import React, { Fragment } from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Mainpage from "./components/Mainpage"
import PollPage from "./components/PollPage"
import Header from "./components/Header"

function App() {
	return (
		<Fragment>
			<Router>
				<Header />

				<Route path="/">
					<Mainpage />
				</Route>

				<Route exact path="/pollpage">
					<PollPage />
				</Route>
			</Router>
		</Fragment>
	)
}

export default App
