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
		console.log( v.target );
		this.setState({
			[name] : value
		});
	};

	createUser = () => {
		const { name, email } = this.state;
		console.log ( "Name: " + name + "." );
		alert("New user " + name + " has been created with e-mail " + email  + ".");
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
						value={this.state.value}
						name="userName"
						onChange={this.updateInputValue}
					/>
					<input
						placeholder="alex.cuoci@hotmail.ca"
						value={this.state.value}
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
