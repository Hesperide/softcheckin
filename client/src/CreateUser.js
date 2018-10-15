import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import './App.css'


const POST_MUTATION = gql`
	mutation PostMutation($userName: String!, $userEmail: String!) {
		createUser(name: $userName, email: $userEmail){
			_id
			name
			email
		}
	}
`


class CreateUser extends Component {
	constructor(){
		super();
		this.state = {
			userName: "",
			userEmail: "",
		};
		this.updateInputValue = this.updateInputValue.bind(this);
	}

	updateInputValue = v => {
		const { name, value } = v.target;
		console.log( name );
		console.log( value );
		console.log( v.target );
		this.setState({
			[name] : value
		});
	};

	render() {
		const { userName, userEmail } = this.state;
		return (
			<div className="App">
				<header className="App-header">
					<p>
						User Creation
					</p>
					<input
						type="text"
						placeholder="Full Name"
						value={this.state.userName}
						name="userName"
						onChange={this.updateInputValue}
					/>
					<input
						placeholder="E-mail address"
						value={this.state.userEmail}
						name="userEmail"
						onChange={ v => this.updateInputValue(v)}
					/>
					<div>
					<Mutation mutation={POST_MUTATION} variables={{ userName, userEmail}}>
						{(PostMutation)  => (
							<button type="button" class="btn btn-primary"  onClick={PostMutation}>Create User</button>
						)}
					</Mutation>
					</div>
				</header>
			</div>
		);
	} 
}

export default CreateUser;
