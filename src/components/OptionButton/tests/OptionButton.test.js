import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import 'jest-styled-components';
import OptionButton from '../index';

it('renders without crashing', () => {
    shallow(<OptionButton />);
});