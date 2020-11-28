import React, {} from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Mainpage from "./components/Mainpage"
import PollPage from "./components/PollPage"
import Result from "./components/Result"

import Header from "./components/Header"

function App() {
	return (
		<>
			<Header/>
			<Router>
				<Switch>
					<Route exact path="/" component={Mainpage} />
					<Route exact path="/pollpage/:id" component={PollPage} />
				    <Route exact path="/result/:id" component={Result} />

				</Switch>
			</Router>
		</>
	)
}
export default App
