import React, { Component } from 'react';
import './App.css';
import CustomerList from './CustomerModule/components/customerList';

class App extends Component {
	render() {
		const customers = [{ name: 'John' }, { name: 'Jean' }];
		return (
			<div className="App">
				<h1>CaneChair CRM</h1>
				<CustomerList customers={customers} />
			</div>
		);
	}
}

export default App;
