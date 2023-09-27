import React, {useState} from 'react';
import {View, Text, TextInput, Button, ScrollView} from 'react-native';

const UserProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const textInputStyle = {
    backgroundColor: 'pink',
    height: 40,
    margin: 10,
    padding: 10,
  };

  return (
    <View style={{flex: 1}}>
      <TextInput
        value={firstName}
        defaultValue="First Name"
        onChangeText={changedText => {
          setFirstName(changedText);
        }}
        style={textInputStyle}
      />
      <TextInput
        value={lastName}
        defaultValue="Last Name"
        onChangeText={changedText => {
          setLastName(changedText);
        }}
        style={textInputStyle}
      />
      <TextInput
        value={city}
        defaultValue="City"
        onChangeText={changedText => {
          setCity(changedText);
        }}
        style={textInputStyle}
      />
      <TextInput
        value={country}
        defaultValue="Country"
        onChangeText={changedText => {
          setCountry(changedText);
        }}
        style={textInputStyle}
      />

      <Button
        onPress={() => {
          console.log(firstName);
          console.log(lastName);
          console.log(city);
          console.log(country);
        }}
        title="Submit"
        color="#841584"
      />
    </View>
  );
};

export default UserProfile;
