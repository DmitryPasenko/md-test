import React from 'react';
import {shallow} from 'enzyme';
import MobileFilters from '../MobileFilters';

describe('<MobileFilters />', () => {
    it('renders without crashing', () => {
        shallow(<MobileFilters />);
    });
});