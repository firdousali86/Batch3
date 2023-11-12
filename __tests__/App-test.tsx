/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
// import App from '../src/App';

import ReactTestScreen from '../src/screens/ReactTestScreen';
import {validatePassword} from '../src/utils';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

it('test screen check', () => {
  const {getByTestId} = render(<ReactTestScreen />);

  // const incrementButton = getByTestId('button_increment');
  const labeltext = getByTestId('text_db');

  expect(labeltext).toHaveTextContent('test screen');
});

it('test screen check after button press', () => {
  const {getByTestId} = render(<ReactTestScreen />);

  // const incrementButton = getByTestId('button_increment');
  const labeltext = getByTestId('text_db');
  const button1 = getByTestId('button1');

  fireEvent.press(button1);

  expect(labeltext).toHaveTextContent('something');
});

describe('password test suite', () => {
  it('check length', () => {
    const password = '123456';

    const result = validatePassword(password);

    expect(result).toBe(false);
  });

  it('check length', () => {
    const password = 'Abc123456&';

    const result = validatePassword(password);

    expect(result).toBe(true);
  });
});
