import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			userName: "",
			userEmail: "",
		};
		this.updateInputValue = this.updateInputValue.bind(this);
		this.createUser = this.createUser.bind(this);
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

	createUser = () => {
		console.log(this.state);
		const { userName, userEmail } = this.state;
		console.log ( "Name: " + userName + "." );
		alert("New user " + userName + " has been created with e-mail " + userEmail  + ".");
	};

	render() {
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
					<button onClick={this.createUser}>Create User</button>
				</header>
			</div>
		);
	}
}

export default App;
