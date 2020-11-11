import React from "react"
import { PieChart } from "react-minimal-pie-chart"
const PollPage = () => {
	return (
		<div className="pollpage">
			<div className="poll-infos">
				<h1 className="infos-title">Title</h1>
				<h3>Toplam Oy Sayısı:300</h3>
				<h5>Option1 175 - %50</h5>
				<h5>Option2 75 - %30 </h5>
				<h5>Option3 50 - %20</h5>
			</div>
			<div className="chart">
				<PieChart
					viewBoxSize="[10,10]"
					data={[
						{ title: "One", value: 10, color: "#E38627" },
						{ title: "Two", value: 15, color: "#C13C37" },
						{ title: "Three", value: 20, color: "#6A2135" },
					]}

					<p align="left">
 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> </p>  <a href="https://www.postgresql.org" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> <a href="https://rubyonrails.org" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/rails/rails-original-wordmark.svg" alt="rails" width="40" height="40"/> </a> <a href="https://www.ruby-lang.org/en/" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/ruby/ruby-original-wordmark.svg" alt="ruby" width="40" height="40"/> </a> </p><a href="https://www.linux.org/" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a>
<p align="left"> <a href="https://expressjs.com" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://graphql.org" target="_blank"> <img src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" alt="graphql" width="40" height="40"/> </a> <a href="https://www.linux.org/" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> </p>

				/>
			</div>
		</div>
	)
}

export default PollPage
