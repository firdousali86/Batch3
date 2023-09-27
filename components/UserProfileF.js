import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const UserProfileF = props => {
  const [toggleButton, setToggleButton] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');
  const [viewBGColorState, setViewBGStateColor] = useState(props.viewBGColor);
  const [textColorState, setTextStateColor] = useState(props.textColor);

  // const {viewBGColor, textColor} = props;

  return (
    <View>
      <Text style={{color: textColorState, backgroundColor: viewBGColorState}}>
        Hello world!
      </Text>
      <Text style={{color: textColorState, backgroundColor: viewBGColorState}}>
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

      <Button
        onPress={() => {
          setViewBGStateColor('red');
        }}
        title="SET TO RED"
        color="#841584"
      />
      <Button
        onPress={() => {
          setViewBGStateColor('blue');
        }}
        title="SET TO BLUE"
        color="#841584"
      />
      <Button
        onPress={() => {
          setViewBGStateColor('orange');
        }}
        title="SET TO ORANGE"
        color="#841584"
      />
      <Button
        onPress={() => {
          setViewBGStateColor('black');
        }}
        title="SET TO BLACK"
        color="#841584"
      />
      <Button
        onPress={() => {
          setViewBGStateColor('yellow');
        }}
        title="SET TO YELLOW"
        color="#841584"
      />
    </View>
  );
};

export default UserProfileF;
