import React, { Component } from 'react'
import { timeDifferenceForDate } from './utils'
import { Link } from 'react-router-dom'

class Peer extends Component {
	render() {
		const date = new Date();
		date.setTime(parseInt(this.props.peer.lastCheckIn));
		return(
			<div>
				<div>
					{this.props.peer.name} | {this.props.peer.age} | {this.props.peer.program} | {timeDifferenceForDate(date).toString() + " "}
					 | <Link to={{ pathname: '/createEntry', state: { peerId: this.props.peer._id, userId: this.props.peer.userId }}} className="ml1 no-underline black">Entries</Link>
				</div>
			</div>
		)
	}
}

export default Peer
