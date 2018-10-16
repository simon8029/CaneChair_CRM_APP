import React from 'react';

class CustomerProfile extends React.Component {
	render() {
		return (
			<div>
				<div>Profile</div>
				<h2 className="customer-profile">
					{this.props.customer.profile}
				</h2>
			</div>
		);
	}
}

export default CustomerProfile;
