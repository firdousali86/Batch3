/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View, TextInput, ScrollView} from 'react-native';
import UserProfile from './components/UserProfile';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <UserProfile />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
