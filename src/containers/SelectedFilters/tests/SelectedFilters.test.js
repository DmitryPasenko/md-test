import React from 'react';
import {shallow} from 'enzyme';
import SelectedFilters from '../SelectedFilters';

describe('<SelectedFilters />', () => {
    it('renders without crashing', () => {
        shallow(<SelectedFilters />);
    });
});