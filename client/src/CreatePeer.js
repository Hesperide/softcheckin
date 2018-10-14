import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import './App.css'


const POST_MUTATION = gql`
	mutation PostMutation($userId: String!, $peerName: String!, $peerAge: Int!, $peerProgram: String!){
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
		console.log(this.state);
		console.log(this.props.userId);
	};

	render() {
		const userId = String(this.props.userId);
		const { peerName, peerProgram } = this.state;
		const peerAge = parseInt(this.state.peerAge);
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
					<Mutation mutation={POST_MUTATION} variables={{ userId, peerName, peerAge, peerProgram}} errorPolicy="all">
						{(PostMutation)  => (
							<button onClick={PostMutation}>Create Peer</button>
						)}
					</Mutation>
				</header>
			</div>
		);
	}
}

export default CreatePeer;
