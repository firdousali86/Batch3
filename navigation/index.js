import {} from 'react';
import {} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TestFlexScreen, TestStatePropsScreen} from '../screens';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="testFlex"
        component={TestFlexScreen}
        options={{title: 'Testing Flex System'}}
      />
      <Stack.Screen
        name="testStateProps"
        component={TestStatePropsScreen}
        options={{title: 'Test State and Props'}}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
