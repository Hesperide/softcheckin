import React, { Component } from 'react'
import './App.css'
import PeerList from './PeerList'

class Dashboard extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<p>
						{this.props.userName}'s Dashboard
					</p>
					<PeerList userId={this.props.userId}/>
				</header>
			</div>
		);
	} 
}

export default Dashboard;
