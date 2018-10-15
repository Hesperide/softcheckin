import React, { Component } from 'react'

class Entry extends Component {
	render() {
		const date = new Date();
		date.setTime(parseInt(this.props.entry.created));
		return(
			<tr>
				<td>{date.getDate().toString()}</td>
				<td>{this.props.entry.contents}</td>
				<td>{this.props.entry.expType}</td>
			</tr>
		)
	}
}

export default Entry
