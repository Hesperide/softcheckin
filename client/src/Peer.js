import React, { Component } from 'react'
import { timeDifferenceForDate } from './utils'
import { Link } from 'react-router-dom'

class Peer extends Component {
	render() {
		const date = new Date();
		date.setTime(parseInt(this.props.peer.lastCheckIn));
		return(
			<tbody>
			<tr>
				<td>{this.props.peer.name}</td>
				<td>{this.props.peer.age}</td>
				<td>{this.props.peer.program}</td>
				<td>{timeDifferenceForDate(date).toString() + " "}</td>
				<td><Link to={{ pathname: '/createEntry', state: { peerId: this.props.peer._id, userId: this.props.peer.userId }}} className="ml1 no-underline black">Entries</Link></td>
			</tr>
			</tbody>
		)
	}
}

export default Peer
