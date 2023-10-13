import {useRef, useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';

const TestRefScreen = () => {
  const [inputVal, setInputVal] = useState('');
  const inputRef = useRef(null);

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
      <TouchableOpacity
        onPress={() => {
          //   setInputVal('this is written from button press');
          //   inputRef.current.clear();
          inputRef.current.setNativeProps({text: 'this text is set by useref'});
        }}>
        <Text>Press</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestRefScreen;
