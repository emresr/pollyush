import React, { Fragment } from "react";
import "./App.css";

import Header from "./components/Header";
import Mainpage from "./components/Mainpage";
import Footer from "./components/Footer";

function App() {
	return (
		<Fragment>
			<div className="container">
				<Header />
				<Mainpage />
				<Footer />
			</div>
		</Fragment>
	);
}

export default App;
