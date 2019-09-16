// Test away!
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import { toBeInTheDocument, toBeDisabled } from '@testing-library/jest-dom';

import Controls from './Controls';

expect.extend({ toBeInTheDocument, toBeDisabled });
afterEach(cleanup);

test('provide buttons to toggle the closed and locked states.', () => {
    expect(shallow(<Controls />)).toMatchSnapshot();
});

test('the closed toggle button is disabled if the gate is locked', () => {
    const { queryByTestId } = render(<Controls locked={true} />);
    expect(queryByTestId('open-close')).toBeDisabled();
});

test('the locked toggle button is disabled if the gate is open', () => {
    const { queryByTestId } = render(<Controls closed={false} />);
    expect(queryByTestId('lock-unlock')).toBeDisabled();
});
