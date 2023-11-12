import {useRef, useState, forwardRef, useImperativeHandle} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const CustomComponent = forwardRef((props, ref) => {
  const [textinput, settextinput] = useState('');
  const [textinput2, settextinput2] = useState('');

  const myinputref1 = useRef(null);
  const myinputref2 = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      setCountryName: countryName => {
        myinputref2.current.setNativeProps({text: countryName});
      },
      setCityName: cityName => {
        myinputref1.current.setNativeProps({text: cityName});
      },
    };
  });

  return (
    <View style={{backgroundColor: 'lightyellow'}}>
      <TextInput
        ref={myinputref1}
        value={textinput}
        onChangeText={changedText => {
          settextinput(changedText);
        }}
        placeholder="City"
        style={{
          backgroundColor: 'pink',
          height: 40,
          margin: 10,
          padding: 5,
        }}
      />
      <TextInput
        ref={myinputref2}
        value={textinput2}
        onChangeText={changedText => {
          settextinput2(changedText);
        }}
        placeholder="Country"
        style={{
          backgroundColor: 'pink',
          height: 40,
          margin: 10,
          padding: 5,
        }}
      />
      <TouchableOpacity>
        <Text>Press</Text>
      </TouchableOpacity>
    </View>
  );
});

export default CustomComponent;
