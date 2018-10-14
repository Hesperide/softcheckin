import React, { Component } from 'react'

class Peer extends Component {
	render() {
		return(
			<div>
				<div>
					{this.props.name} | {this.props.age} | {this.props.program}
				</div>
			</div>
		)
	}
}

export default Peer
