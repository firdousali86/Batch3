import React from 'react';
import {View, Text, TextInput} from 'react-native';

const UserProfileF = () => {
  return (
    <View>
      <Text style={{color: 'red', backgroundColor: 'blue'}}>Hello world!</Text>
      <Text style={{color: 'red', backgroundColor: 'blue'}}>
        this is a functional component
      </Text>
      <TextInput
        defaultValue="Enter text"
        onChangeText={changedText => {
          console.log(changedText);
        }}
      />
    </View>
  );
};

export default UserProfileF;
