// Test away!
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { shallow } from 'enzyme';

import Display from './Display';

afterEach(cleanup);

test('Display renders', () => {
    expect(shallow(<Display />)).toMatchSnapshot();
});

test('Display defaults to "true" "true" for props', () => {
    expect(Display.defaultProps.locked).toBe(false);
    expect(Display.defaultProps.closed).toBe(false);
});

test('displays "Closed" if the closed prop is true and "Open" if otherwise', () => {
    const closed = render(<Display closed={true} />);
    closed.getByText(/Closed/);

    const open = render(<Display closed={false} />);
    open.getByText(/Open/);
});

test('displays "Locked" if the locked prop is true and "Unlocked" if otherwise', () => {
    const locked = render(<Display locked={true} />);
    locked.getByText('Locked');

    const unlocked = render(<Display locked={false} />);
    unlocked.getByText('Unlocked');
});

test('when locked or closed use the red-led class', () => {
    const locked = shallow(<Display locked={true} />);
    expect(locked.exists('.red-led')).toBe(true);

    const closed = shallow(<Display closed={true} />);
    expect(closed.exists('.red-led')).toBe(true);
});

test('when unlocked or open use the green-led class', () => {
    const locked = shallow(<Display locked={false} />);
    expect(locked.exists('.green-led')).toBe(true);

    const closed = shallow(<Display closed={false} />);
    expect(closed.exists('.green-led')).toBe(true);
});
