import React from 'react';

class CustomerList extends React.Component {
	render() {
		const { customers } = this.props;
		return (
			<div className="customers">
				{customers.map(customer => {
					return (
						<div key={customer.id} className="customer">
							<h2 className="customerName">{customer.name}</h2>
							<a
								href={`/customer/${customer.id}`}
								className="view-detail"
							>
								View Detail
							</a>
						</div>
					);
				})}
			</div>
		);
	}
}

export default CustomerList;
