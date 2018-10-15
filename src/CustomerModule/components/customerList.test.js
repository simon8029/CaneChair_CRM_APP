import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import axios from 'axios';
import CustomerList from './customerList';

describe('CustomerList', () => {
	// it('should display a loading bar when loading', () => {
	// 	const props = { loading: true };

	// 	const wrapper = shallow(<CustomerList {...props} />);
	// 	expect(wrapper.find('.loading').length).toEqual(1);
	// });

	// it('should display a error bar when error occurs', () => {
	// 	const props = {
	// 		error: {
	// 			message: 'Something went wrong!'
	// 		}
	// 	};

	// 	const wrapper = shallow(<CustomerList {...props} />);

	// 	expect(wrapper.find('.error').length).toEqual(1);
	// });

	it(' should display a list of customers when there is customers array', () => {
		const props = {
			customers: [
				{ name: 'John', id: 1 },
				{ name: 'Jean', id: 2 },
				{ name: 'Smith', id: 3 }
			]
		};
		const wrapper = shallow(<CustomerList {...props} />);

		expect(wrapper.find('.customer').length).toEqual(3);
	});
});
