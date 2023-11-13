import {useState} from 'react';
import {View, Text, Button} from 'react-native';
import React from 'react';

export default function ReactTestComponent() {
  const [someText, setSomeText] = useState('initial value');

  return (
    <View>
      <Text testID="mytextlabel">{someText}</Text>

      <Button
        testID="button1"
        title={'Button 1'}
        onPress={() => {
          setSomeText('button 1 pressed');
        }}
      />
      <Button
        testID="button2"
        title={'Button 2'}
        onPress={() => {
          setSomeText('button 2 pressed');
        }}
      />
    </View>
  );
}
