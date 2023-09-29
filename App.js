/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TestFlexScreen, TestStatePropsScreen} from './screens';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="testFlex" component={TestFlexScreen} />
        <Stack.Screen name="testStateProps" component={TestStatePropsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
