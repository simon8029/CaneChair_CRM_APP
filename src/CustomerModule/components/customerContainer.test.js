import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import CustomerContainer from './customerContainer';

let wrapper;

beforeAll(() => {
	wrapper = shallow(<CustomerContainer />);
});

describe('CustomerContainer Component', () => {
	it('should display loading indecator when loading ', () => {
		wrapper.setState({ loading: true });

		expect(wrapper.find('.loading').length).toEqual(1);
	});

	it('should display error when error occurs', () => {
		wrapper.setState({ errorMessage: 'Error!' });

		expect(wrapper.find('.errorMessage').length).toEqual(1);
	});
});
