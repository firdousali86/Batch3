/**
 * @format
 */

import 'react-native';
import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
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

describe('react test screen', () => {
  it('test screen check', () => {
    const {getByTestId} = render(<ReactTestScreen />);

    // const incrementButton = getByTestId('button_increment');
    const labeltext = getByTestId('text_db');

    expect(labeltext).toHaveTextContent('test screen');
  });

  it('test screen check after button press', () => {
    const {getByTestId} = render(<ReactTestScreen />);

    const labeltext = getByTestId('text_db');
    const button1 = getByTestId('button1');

    fireEvent.press(button1);

    expect(labeltext).not.toHaveTextContent('test screen');
    expect(labeltext).toHaveTextContent('something');
    expect(labeltext.props.children).toBe('something');
  });

  test('snapshot mismatch after state change', async () => {
    // Arrange
    const component = renderer.create(<ReactTestScreen />);
    const treeBeforeStateChange = component.toJSON();

    const {getByTestId} = render(<ReactTestScreen />);

    // Act
    fireEvent.press(getByTestId('button1'));

    // Assert
    await waitFor(() => {
      const treeAfterStateChange = component.toJSON();
      // Assert
      expect(treeAfterStateChange).toMatchSnapshot();
    });

    // Reset state
    fireEvent.press(getByTestId('button2'));

    await waitFor(() => {
      const treeAfterStateReset = component.toJSON();
      // Assert
      expect(treeAfterStateReset).toMatchSnapshot();
    });
  });
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
