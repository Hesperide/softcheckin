import React, { Component } from 'react'
import Header from './Header'
import CreatePeer from './CreatePeer'
import CreateUser from './CreateUser'
import CreateEntry from './CreateEntry'
import Dashboard from './Dashboard'
import { Switch, Route } from 'react-router-dom'


//User Id is currently hardcoded to Alex Cuoci.
//TODO - When auth implemented on backend, can change to current logged in user.
class App extends Component {
	render() {
		const userId = "5bc23882a52aa63b54fccdbc";
		const userName = "Alex Cuoci";
		return (
			<div>
				<Header />
				<div className="ph3 pv1 background-gray">
					<Switch>
						<Route exact path="/" render={() => <Dashboard userId={userId} userName={userName} />} />
						<Route exact path="/createPeer" render={() => <CreatePeer userId={userId} />} />
						<Route exact path="/createUser" component={CreateUser}/>
						<Route exact path='/createEntry' component={CreateEntry}/>
					</Switch>
				</div>
			</div>
		);
	} 
}

export default App;
