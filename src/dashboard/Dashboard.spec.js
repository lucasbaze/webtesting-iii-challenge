// Test away
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { mount, shallow } from 'enzyme';

import Dashboard from './Dashboard';

test('Dashboard renders with controls and display', () => {
    expect(mount(<Dashboard />)).toMatchSnapshot();
    expect(shallow(<Dashboard />)).toMatchSnapshot();
});

test('buttons text changes to reflect the state the door will be in if clicked', async () => {
    const component = render(<Dashboard />);

    let button = component.getByText('Close Gate');
    fireEvent.click(button);

    button = await component.getByText('Open Gate');
    expect(button);
});
