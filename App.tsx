/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View, TextInput} from 'react-native';
import UserProfileC from './components/UserProfileC';
import UserProfileF from './components/UserProfileF';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{}}>
      <UserProfileF viewBGColor={'green'} textColor={'blue'} />
    </SafeAreaView>
  );
}

export default App;
