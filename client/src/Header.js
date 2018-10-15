import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import './App.css'

class Header extends Component {
	render() {
		return (
			<div className="App-route">
				<h1>SoftCheckIn</h1>
				<Link className="App-route-padding" to="/">Dashboard</Link>
				|
				<Link className="App-route-padding" to="/createUser" >Create User</Link>
				|
				<Link className="App-route-padding"  to="/createPeer" >Create Peer</Link>
			</div>
		)
	}
}

export default withRouter(Header)
