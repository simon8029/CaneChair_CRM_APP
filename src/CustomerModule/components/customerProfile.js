import React from 'react';

class CustomerProfile extends React.Component {
	render() {
		return (
			<div>
				<div>Profile</div>
				<div className="customer-profile">
					{this.props.customer.profile}
				</div>
			</div>
		);
	}
}

export default CustomerProfile;
