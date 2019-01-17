import React from 'react';
import {shallow} from 'enzyme';
import FilterButton from '../FilterButton';

describe('<FilterButton />', () => {
    it('renders without crashing', () => {
        shallow(<FilterButton />);
    });
});