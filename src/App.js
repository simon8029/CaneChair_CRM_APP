import React, { Component } from 'react';
import './App.css';
import CustomerContainer from './CustomerModule/components/customerContainer';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="App">
				<h1>CaneChair CRM</h1>
				<CustomerContainer />
			</div>
		);
	}
}

export default App;
