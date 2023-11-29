import React, {useEffect, useState} from 'react';
import {Button} from 'react-native';
import {PersistanceHelper, NotificationHelper} from '../helpers';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {EventRegister} from 'react-native-event-listeners';
import {useDispatch, useSelector} from 'react-redux';
import {
  TestFlexScreen,
  TestStatePropsScreen,
  Dashboard,
  Login,
  TestPureComponent,
  TestPropsScreen,
  TestReduxScreen,
  TestReduxClassScreen,
  ListScreen,
  CartScreen,
  ListApiScreen,
  TestRefScreen,
  TestReduxQuery,
  LocationScreen,
  TestImagePicker,
  TestClassLifecycle,
  TypeScriptScreen,
  UserProfileEdit,
  PubNubScreen,
} from '../screens';
import {addSslPinningErrorListener} from 'react-native-ssl-public-key-pinning';

const Stack = createNativeStackNavigator();

const Navigator = props => {
  const user = useSelector(state => state.user);
  const navigation = useNavigation();

  useEffect(() => {
    // fetchUserEmail();

    // let event = EventRegister.addEventListener('LoginEvent', data => {
    //   fetchUserEmail();
    // });

    NotificationHelper.initializeFCM(
      rm => {
        console.log(rm);
      },
      rm => {
        console.log(rm);
        navigation.navigate('listScreen');
      },
    );
    NotificationHelper.checkFCMPermission();
    NotificationHelper.getToken();

    return () => {
      // EventRegister.removeEventListener(event);
    };
  }, []);

  useEffect(() => {
    const subscription = addSslPinningErrorListener(error => {
      // Triggered when an SSL pinning error occurs due to pin mismatch
      console.log(error.serverHostname);
    });
    return () => {
      subscription.remove();
    };
  }, []);

  // const fetchUserEmail = async () => {
  //   const userEmail = await PersistanceHelper.getValue('userEmail');

  //   if (userEmail && userEmail.length > 0) {
  //     setIsUserLoggedin(true);
  //   } else {
  //     setIsUserLoggedin(false);
  //   }
  // };

  const isUserLoggedIn = () => {
    return true;
    return user?.data?.id && user?.data?.id?.length > 15;
  };

  const getMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="listApiScreen"
          component={ListApiScreen}
          options={{title: 'List Api Screen'}}
        />
        <Stack.Screen
          name="pubNubScreen"
          component={PubNubScreen}
          options={{title: 'PubNub Screen'}}
        />
        <Stack.Screen
          name="testReduxQuery"
          component={TestReduxQuery}
          options={{title: 'Test Redux Query Screen'}}
        />
        <Stack.Screen
          name="userProfileEdit"
          component={UserProfileEdit}
          options={{title: 'User Profile Edit'}}
        />
        <Stack.Screen
          name="dashboard"
          component={Dashboard}
          options={{title: 'Dashboard'}}
        />
        <Stack.Screen
          name="typeScriptScreen"
          component={TypeScriptScreen}
          options={{title: 'TypeScript'}}
        />

        <Stack.Screen
          name="testClassLifecycle"
          component={TestClassLifecycle}
          options={{title: 'test lifecycle'}}
        />
        <Stack.Screen
          name="listScreen"
          component={ListScreen}
          options={{
            title: 'List Screen',
            headerRight: () => (
              <Button
                onPress={() => {
                  navigation.navigate('cartScreen');
                }}
                title="Cart"
                color="red"
              />
            ),
          }}
        />
        <Stack.Screen
          name="cartScreen"
          component={CartScreen}
          options={{title: 'Cart Screen'}}
        />

        <Stack.Screen
          name="testImagePicker"
          component={TestImagePicker}
          options={{title: 'Image picker'}}
        />
        <Stack.Screen
          name="locationScreen"
          component={LocationScreen}
          options={{title: 'Location Screen'}}
        />

        <Stack.Screen
          name="testRefScreen"
          component={TestRefScreen}
          options={{title: 'Test Ref Screen'}}
        />

        <Stack.Screen
          name="testReduxClassScreen"
          component={TestReduxClassScreen}
          options={{title: 'Test Redux class Component'}}
        />
        <Stack.Screen
          name="testPropsScreen"
          component={TestPropsScreen}
          options={{title: 'Test Props Component'}}
        />
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
      {isUserLoggedIn() ? getMainStack() : getAuthStack()}
    </Stack.Navigator>
  );
};

export default Navigator;
