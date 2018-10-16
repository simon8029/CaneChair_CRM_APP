import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import CustomerProfile from './customerProfile';

describe('Customer Profile', () => {
	it('should display customer profile', () => {
		const props = {
			customer: {
				name: 'John',
				id: 999,
				profile: "John's profile"
			}
		};
		const wrapper = shallow(<CustomerProfile customer={props.customer} />);

		expect(wrapper.find('.customer-profile').text()).toEqual(
			"John's profile"
		);
	});
});
