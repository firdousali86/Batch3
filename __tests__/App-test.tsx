import 'react-native';
import React from 'react';

import {it} from '@jest/globals';
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';

import {validatePassword} from '../src/utils';

import {ReactTestComponent} from '../src/components';

test('case 1', () => {
  const password = 'Abc123456$';

  const result = validatePassword(password);

  expect(result).toBe(true);
});

test('case 2', () => {
  const password = 'Abc156$';

  const result = validatePassword(password);

  expect(result).toBe(false);
});

test('case 3', () => {
  const password = 'Abc56456456156';

  const result = validatePassword(password);

  expect(result).toBe(false);
});

test('test my react component', () => {
  const {getByTestId} = render(<ReactTestComponent />);
  const mylabel = getByTestId('mytextlabel');

  expect(mylabel).toHaveTextContent('initial value');
});

test('test my react component', () => {
  const {getByTestId} = render(<ReactTestComponent />);
  const mylabel = getByTestId('mytextlabel');
  const mybutton1 = getByTestId('button1');

  fireEvent.press(mybutton1);

  //   expect(mylabel).not.toHaveTextContent('initial value');
  //   expect(mylabel).toHaveTextContent('button 1 pressed');

  expect(mylabel.props.children).toBe('button 1 pressed');
});
