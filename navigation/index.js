import {useEffect, useState} from 'react';
import {} from 'react-native';
import {PersistanceHelper} from '../helpers';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EventRegister} from 'react-native-event-listeners';
import {
  TestFlexScreen,
  TestStatePropsScreen,
  Dashboard,
  Login,
  TestPureComponent,
} from '../screens';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const [isUserLoggedin, setIsUserLoggedin] = useState(false);

  useEffect(() => {
    fetchUserEmail();

    let event = EventRegister.addEventListener('LoginEvent', data => {
      fetchUserEmail();
    });

    return () => {
      EventRegister.removeEventListener(event);
    };
  }, []);

  const fetchUserEmail = async () => {
    const userEmail = await PersistanceHelper.getValue('userEmail');

    if (userEmail && userEmail.length > 0) {
      setIsUserLoggedin(true);
    } else {
      setIsUserLoggedin(false);
    }
  };

  const getMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="testPureComponent"
          component={TestPureComponent}
          options={{title: 'Test Pure Component'}}
        />
        <Stack.Screen
          name="testStateProps"
          component={TestStatePropsScreen}
          options={{title: 'Test State and Props'}}
        />
        <Stack.Screen
          name="dashboard"
          component={Dashboard}
          options={{title: 'Dashboard'}}
        />
        <Stack.Screen
          name="testFlex"
          component={TestFlexScreen}
          options={{title: 'Testing Flex System'}}
        />
      </Stack.Group>
    );
  };

  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="login"
          component={Login}
          options={{title: 'Login'}}
        />
      </Stack.Group>
    );
  };

  return (
    <Stack.Navigator>
      {isUserLoggedin ? getMainStack() : getAuthStack()}
    </Stack.Navigator>
  );
};

export default Navigator;
