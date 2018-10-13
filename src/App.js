import React, { Component } from 'react';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>CaneChair CRM</h1>
				<div className="customers">
					<div className="customer">
						<h2 className="customerName">John</h2>
					</div>
					<div className="customer">
						<h2 className="customerName">Jean</h2>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
