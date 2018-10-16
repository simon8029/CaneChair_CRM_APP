import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import CustomerContainer from './CustomerModule/components/customerContainer';
import CustomerProfileContainer from './CustomerModule/components/customerProfileContainer';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="App">
				<h1>CaneChair CRM</h1>
				<main>
					<Route exact path="/" component={CustomerContainer} />
					<Route
						path="/customer/:id"
						component={CustomerProfileContainer}
					/>
				</main>
			</div>
		);
	}
}

export default App;
