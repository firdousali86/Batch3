import {useRef, useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';

const TestRefScreen = () => {
  const [inputVal, setInputVal] = useState('');
  const [inputVal2, setInputVal2] = useState('');

  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  return (
    <View>
      <TextInput
        ref={inputRef}
        value={inputVal}
        onChangeText={changedText => {
          setInputVal(changedText);
        }}
        placeholder="First Name"
        style={{backgroundColor: 'pink', height: 40, margin: 10, padding: 5}}
      />
      <TextInput
        ref={inputRef2}
        value={inputVal2}
        onChangeText={changedText => {
          setInputVal2(changedText);
        }}
        placeholder="Last Name"
        style={{backgroundColor: 'pink', height: 40, margin: 10, padding: 5}}
      />
      <TouchableOpacity
        onPress={() => {
          //   setInputVal('this is written from button press');
          //   inputRef.current.clear();
          //   inputRef.current.setNativeProps({text: 'this text is set by useref'});
          inputRef2.current.focus();
        }}>
        <Text>Press</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestRefScreen;
