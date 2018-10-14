import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			name: "",
			email: "",
		};
	}

	updateInputValue = v => {
		const { comp, val } = v.target;
		console.log( v );
		this.setState({
			[comp] : val
		});
	};

	createUser = () => {
		const { name, email } = this.state;
		console.log ( "Name: " + name + "." );
		alert("New user " + name + " has been created with e-mail" + email  + ".");
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
				placeholder="Alex Cuoci"
				value={this.state.inputValue}
				name="name"
				onBlur={ v => this.updateInputValue(v)}
				/>
				<input
				placeholder="alex.cuoci@hotmail.ca"
				value={this.state.inputValue}
				name="email"
				onBlur={ v => this.updateInputValue(v)}
				/>
				<button onClick={this.createUser}>Create User</button>
				</header>
			</div>
		);
	}
}

export default App;
