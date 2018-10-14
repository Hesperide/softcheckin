import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import './App.css'


const POST_MUTATION = gql`
	mutation PostMutation($userId: String!, $peerName: String!, $peerAge: Number!, $peerProgram: String!){
		createPeer(userId: $userId, name: $peerName, age: $peerAge, program: $peerProgram){
			_id
			name
			age
			program
			userId
		}
	}
`

class CreatePeer extends Component {
	constructor(){
		super();
		this.state = {
			userId: "",
			peerName: "",
			peerAge: "",
			peerProgram: "",
		};
		this.updateInputValue = this.updateInputValue.bind(this);
	
	}

	updateInputValue = v => {
		const { name, value } = v.target;
		this.setState({
			[name] : value
		});
	};

	render() {
		const { userId, peerName, peerAge, peerProgram } = this.state;
		return(	
			<div className="App">
				<header className="App-header">
					<p>
						Create a new peer, then check out localhost:3001/graphiql to see it!
					</p>
					<input
						placeholder="Alex Cuoci"
						value={this.state.peerName}
						name="peerName"
						onChange={this.updateInputValue}
					/>
					<input
						placeholder="21"
						value={this.state.peerAge}
						name="peerAge"
						onChange={ v => this.updateInputValue(v)}
					/>
					<input
						placeholder="Computer Science"
						value={this.state.peerProgram}
						name="peerProgram"
						onChange={ v => this.updateInputValue(v)}
					/>
					<Mutation mutation={POST_MUTATION} variables={{ userId, peerName, peerAge, peerProgram}}>
						{(PostMutation)  => (
							<button onClick={PostMutation}>Create User</button>
						)}
					</Mutation>
				</header>
			</div>
		);
	}
}

export default CreatePeer;
