import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import './App.css'
import EntryList from './EntryList'


const POST_MUTATION = gql`
	mutation PostMutation($peerId: String!, $userId: String!, $contents: String!, $expType: Int){
		createEntry(peerId: $peerId, userId: $userId, contents: $contents, expType: $expType){
			_id
			expType
			peerId
			userId
			created
		}
	}
`

class CreateEntry extends Component {
	constructor(){
		super();
		this.state = {
			contents: "",
			expType: 0,
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
		const userId = String(this.props.location.state.userId);
		const peerId = String(this.props.location.state.peerId);
		const contents = this.state.contents;
		const expType = parseInt(this.state.expType);
		console.log( { peerId, userId, contents, expType } );		
		return(	
			<div className="App">
				<header className="App-header">
					<p>
						Peer Dashboard	
					</p>
					<div>
						<label style= {{paddingRight:"20px"}}>
							Notes:
						</label>
						<input
							style= {{width:"500px"}}
							placeholder="Notes"
							value={this.state.contents}
							name="contents"
							onChange={this.updateInputValue}
						/>
					</div>
					<div>	
						<label style= {{paddingRight:"20px"}}>
							Rate your experience:
						</label>
					<select 
						name="expType" 
						value = {this.state.expType}
						style = {{width:"298px"}}
						onChange={this.updateInputValue}>
 						 <option value='2'>Good</option>
						 <option selected value='1'>Neutral</option>
						 <option value='0'>Bad</option>
					</select>
					</div>
					<div>
					<Mutation mutation={POST_MUTATION} variables={{ peerId, userId, contents, expType}} errorPolicy="all">
						{(PostMutation)  => (
							<button type="button" class="btn btn-primary"  onClick={PostMutation}>Create Entry</button>
						)}
					</Mutation>
					</div>
					<div>
						<EntryList userId={userId} peerId={peerId}/>
					</div>
				</header>
			</div>
		);
	}
}

export default CreateEntry;
