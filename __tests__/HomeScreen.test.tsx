import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {HomeScreen} from '../src/screens/HomeScreen';
import {SearchScreen} from '../src/screens/SearchScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

jest.mock('../src/components/WeatherForWeekList', () => {
  const React = require('react');
  const {Text} = require('react-native');
  return {
    WeatherForWeekList: () => <Text>Mock WeatherForWeekList</Text>,
  };
});

describe('HomeScreen', () => {
  const Stack = createNativeStackNavigator();
  const {Text} = require('react-native');

  const TestNavigator = () => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  test('renders HomeScreen with header and weather list', () => {
    const {getByText} = render(<TestNavigator />);

    expect(getByText('Weathery')).toBeTruthy();
    expect(getByText('Search Location...')).toBeTruthy();

    expect(getByText('Mock WeatherForWeekList')).toBeTruthy();
  });

  test('navigates to SearchScreen when search button is pressed', () => {
    const {getByText, getByPlaceholderText} = render(<TestNavigator />);

    const searchButton = getByText('Search Location...');
    fireEvent.press(searchButton);

    expect(getByPlaceholderText('Search location...')).toBeTruthy();
  });
});
