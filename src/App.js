import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import CustomerContainer from './CustomerModule/components/customerContainer';
import CustomerDetailContainer from './CustomerModule/components/customerDetailContainer';

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
						component={CustomerDetailContainer}
					/>
				</main>
			</div>
		);
	}
}

export default App;
