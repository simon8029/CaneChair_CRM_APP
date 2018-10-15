import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CustomerList from './CustomerModule/components/customerList';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Customers: []
		};
	}
	componentDidMount() {
		axios.get('http://localhost:8139/customers').then(res => {
			this.setState({ Customers: res.data });
		});
	}
	render() {
		return (
			<div className="App">
				<h1>CaneChair CRM</h1>
				<CustomerList customers={this.state.Customers} />
			</div>
		);
	}
}

export default App;
