import React from 'react';
import CustomerList from './customerList';
import axios from 'axios';

class CustomerContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			customers: [],
			loading: false,
			errorMessage: ''
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:8139/customers')
			.then(res => {
				console.log(`res:`, res);
				this.setState({ customers: res.data, loading: false });
			})
			.catch(err => {
				this.setState({ loading: false, errorMessage: err });
			});
	}

	render() {
		const { customers, loading, errorMessage } = this.state;
		return (
			<div>
				{loading ? <div className="loading">Loading...</div> : null}
				{errorMessage ? (
					<div className="errorMessage">{errorMessage}</div>
				) : null}
				<CustomerList customers={customers} />
			</div>
		);
	}
}

export default CustomerContainer;
