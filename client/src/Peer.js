import React, { Component } from 'react'

class Peer extends Component {
	render() {
		const date = new Date();
		date.setTime(parseInt(this.props.peer.lastCheckIn));
		return(
			<div>
				<div>
					{this.props.peer.name} | {this.props.peer.age} | {this.props.peer.program} | {date.toString()}
				</div>
			</div>
		)
	}
}

export default Peer
