import React from 'react';
import {View, Text} from 'react-native';

const TestFlexScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'pink',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <Text>{Platform.OS === 'android' ? 'ANDROID' : 'IOS'}</Text>
      <View
        style={{
          width: 80,
          height: 80,
          backgroundColor: 'red',
          alignSelf: 'flex-start',
        }}></View>
      <View style={{width: 80, height: 80, backgroundColor: 'yellow'}}></View>
      <View
        style={{
          width: 80,
          height: 80,
          backgroundColor: 'green',
          alignSelf: 'flex-end',
        }}></View>
      <Text>sample text</Text>
    </View>
  );
};

export default TestFlexScreen;
