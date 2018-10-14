import React, { Component } from 'react'

class Entry extends Component {
	render() {
		const date = new Date();
		date.setTime(parseInt(this.props.entry.created));
		return(
			<div>
				<div>
					{date.toString()} | {this.props.entry.contents} | {this.props.entry.expType}
				</div>
			</div>
		)
	}
}

export default Entry
