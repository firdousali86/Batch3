import {useRef, useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {CustomComponent} from '../../components';

const TestRefScreen = () => {
  const [inputVal, setInputVal] = useState('');
  const [inputVal2, setInputVal2] = useState('');
  const [datevar, setdatevar] = useState(undefined);

  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  const myCounter = useRef(0);

  const customComponentRef = useRef(null);

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

      <CustomComponent ref={customComponentRef} />

      <TouchableOpacity
        onPress={() => {
          customComponentRef.current.setCityName('Karachi');
        }}>
        <Text>CASE 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          customComponentRef.current.setCountryName('Pakistan');
        }}>
        <Text>CASE 2</Text>
      </TouchableOpacity>

      <View>
        <Text>{myCounter.current}</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          //   mycounter += 1;

          //   console.log(mycounter);

          myCounter.current += 1;

          setdatevar(new Date());
        }}>
        <Text>Increase counter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestRefScreen;
