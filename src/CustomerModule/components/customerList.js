import React from 'react';

class CustomerList extends React.Component {
	renderCustomers(customers) {
		return (
			<div className="customers">
				{customers.map(customer => {
					return (
						<div className="customer">
							<h2 className="customerName">{customer.name}</h2>
						</div>
					);
				})}
			</div>
		);
	}
	render() {
		return <div>{this.renderCustomers(this.props.customers)}</div>;
	}
}

export default CustomerList;
