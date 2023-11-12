import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

export default function ReactTestScreen() {
  const [sometext, setsometext] = useState('test screen');

  return (
    <View>
      <Text testID="text_db">{sometext}</Text>
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
    </View>
  );
}
