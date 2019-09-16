// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import Controls from './Controls';

test('provide buttons to toggle the closed and locked states.', () => {
    expect(shallow(<Controls />)).toMatchSnapshot();
});
