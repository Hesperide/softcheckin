import React, { Component } from 'react'
import './App.css'
import PeerList from './PeerList'

class Dashboard extends Component {
	render() {
			console.log(this.props);
		return (
			<div className="App">
				<header className="App-header">
					<p>
						Check In Dashboard
					</p>
					<PeerList userId={this.props.userId}/>
				</header>
			</div>
		);
	} 
}

export default Dashboard;
