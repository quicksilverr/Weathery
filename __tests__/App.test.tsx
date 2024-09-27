import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

jest.mock('../src/screens/HomeScreen', () => {
  const {Text} = require('react-native');
  return {
    HomeScreen: () => <Text>Home Screen</Text>,
  };
});

jest.mock('../src/screens/SearchScreen', () => {
  const {Text} = require('react-native');

  return {
    SearchScreen: () => <Text>Search Screen</Text>,
  };
});

describe('App Component', () => {
  test('renders the navigation container with HomeScreen', async () => {
    const {getByText} = render(<App />);
    expect(getByText('Home Screen')).toBeTruthy();
  });
});
