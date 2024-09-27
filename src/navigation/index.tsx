import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './stack-param-list';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import {Routes} from './routes';
import {HomeScreen} from '../screens/HomeScreen';
import {SearchScreen} from '../screens/SearchScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer fallback={<Text>Loading ...</Text>}>
      <RootStack.Navigator>
        <RootStack.Screen
          name={Routes.HomeScreen}
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name={Routes.SearchScreen}
          component={SearchScreen}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
