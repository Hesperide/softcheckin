import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import logo from './logo.svg'
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

class Dashboard extends Component {
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
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Create a new user, then check out localhost:3001/graphiql to see it!
					</p>
					<input
						type="text"
						placeholder="Alex Cuoci"
						value={this.state.userName}
						name="userName"
						onChange={this.updateInputValue}
					/>
					<input
						placeholder="alex.cuoci@hotmail.ca"
						value={this.state.userEmail}
						name="userEmail"
						onChange={ v => this.updateInputValue(v)}
					/>
					<Mutation mutation={POST_MUTATION} variables={{ userName, userEmail}}>
						{(PostMutation)  => (
							<button onClick={PostMutation}>Create User</button>
						)}
					</Mutation>
				</header>
			</div>
		);
	} 
}

export default Dashboard;
