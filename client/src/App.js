import React, { Component } from 'react'
import Header from './Header'
import CreatePeer from './CreatePeer'
import Dashboard from './Dashboard'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
	render() {
		return (
			<div className="center w85">
				<Header />
				<div className="ph3 pv1 background-gray">
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route exact path="/createPeer" component={CreatePeer} />
					</Switch>
				</div>
			</div>
		);
	} 
}

export default App;
