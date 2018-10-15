import React, { Component } from 'react'

class User extends Component{
	render() {
		return(
			<option value={this.props.user._id}>{this.props.user.name}</option>
		);
	}
}

export default User
