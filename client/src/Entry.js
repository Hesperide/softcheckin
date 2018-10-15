import React, { Component } from 'react'
import { expTypeParse } from './utils'

class Entry extends Component {
	render() {
		const date = new Date();
		date.setTime(parseInt(this.props.entry.created));
		return(
			<tbody>
			<tr>
				<td>{date.toLocaleDateString()}</td>
				<td>{this.props.entry.contents}</td>
				<td>{expTypeParse(this.props.entry.expType)}</td>
			</tr>
			</tbody>
		)
	}
}

export default Entry
