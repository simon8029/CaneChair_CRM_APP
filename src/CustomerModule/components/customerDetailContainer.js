import React from 'react';
import axios from 'axios';

class CustomerProfileContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			customer: {}
		};
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		axios
			.get(`http://localhost:8139/customers/${id}`)
			.then(res => {
				this.setState({ customer: res.data });
			})
			.catch(err => {
				// this.setState({ loading: false, errorMessage: err });
			});
	}

	render() {
		const { customer } = this.state;
		return (
			<div>
				<div>Profile</div>
				<div className="customer-profile">{customer.profile}</div>
			</div>
		);
	}
}

export default CustomerProfileContainer;
