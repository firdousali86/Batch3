import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const UserProfileF = props => {
  const [toggleButton, setToggleButton] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');

  const {viewBGColor, textColor} = props;

  return (
    <View>
      <Text style={{color: textColor, backgroundColor: viewBGColor}}>
        Hello world!
      </Text>
      <Text style={{color: textColor, backgroundColor: viewBGColor}}>
        this is a functional component
      </Text>

      <Text>Button toggle state is: {toggleButton == true ? 'Yes' : 'No'}</Text>

      <TextInput
        value={textInputValue}
        defaultValue="Enter text"
        onChangeText={changedText => {
          setTextInputValue(changedText);
        }}
      />
      <Button
        onPress={() => {
          setToggleButton(!toggleButton);
        }}
        title="Tap Button"
        color="#841584"
      />
    </View>
  );
};

export default UserProfileF;
