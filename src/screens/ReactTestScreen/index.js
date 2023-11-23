import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

export default function ReactTestScreen(props) {
  const [sometext, setsometext] = useState('test screen');
  const [textonTap, setTextonTap] = useState('');

  return (
    <View>
      <Text testID="text_db">{sometext}</Text>

      <Text testID="welcome">Welcom batch3 in detox tests</Text>

      <Text>{textonTap}</Text>

      <Button
        testID="button1"
        title="Press"
        onPress={() => {
          setsometext('something');
        }}
      />

      <Button
        testID="button2"
        title="Press"
        onPress={() => {
          setsometext('test screen');
        }}
      />

      <Button
        testID="hello_button"
        title={'Tap to change'}
        onPress={() => {
          setTextonTap('Hello!!!');
        }}
      />
      <Button
        testID="world_button"
        title={'Open screen'}
        onPress={() => {
          props.navigation.navigate('reactTestScreen2');
        }}
      />
    </View>
  );
}
