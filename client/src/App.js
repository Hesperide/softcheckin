import React, { Component } from 'react'
import Header from './Header'
import CreatePeer from './CreatePeer'
import CreateUser from './CreateUser'
import User from './User'
import CreateEntry from './CreateEntry'
import Dashboard from './Dashboard'
import { Switch, Route } from 'react-router-dom'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'


//User Id is currently defaulted to Alex Cuoci.
//TODO - When auth implemented on backend, can change to current logged in user.

const USER_QUERY = gql`
	{
		users {
			_id
			name
		}
	}
`;


class App extends Component {
	constructor(){
		super();
		this.state = {
			userId: "5bc23882a52aa63b54fccdbc",
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
		return (
			<div>
				<div className="ph3 pv1 background-gray">
					<Header />
				</div>
				<div className="App-header">
					<hr />
					<Query query={USER_QUERY}>
					{({ loading, error, data}) => {
						if (loading) return <div> Fetching </div>;
						if (error) console.log(error);
						return(
						<div>
						<label style={{paddingRight:"20px"}}>
							Choose a user:
						</label>
						<select name="userId" value={this.state.user} onChange={this.updateInputValue}>
							{data['users'].map(user => <User key={user._id} user={user}/>)}
						</select>		
						</div>	
						);
					}}
					</Query>
					<hr />
					<Switch>
						<Route exact path="/" render={() => <Dashboard userId={this.state.userId} />} />
						<Route exact path="/createPeer" render={() => <CreatePeer userId={this.state.userId} />} />
						<Route exact path="/createUser" component={CreateUser}/>
						<Route exact path='/createEntry' component={CreateEntry}/>
					</Switch>
				</div>
			</div>
		);
	} 
}

export default App;
