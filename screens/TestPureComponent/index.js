import {useState} from 'react';
import {View, TextInput} from 'react-native';

import TestClassComp from './TestClassComp';
import TestFuncComp from './TestFuncComp';

const TestPureComponent = () => {
  const [inputVal, setInputVal] = useState('');
  const [inputVal2, setInputVal2] = useState('');

  console.log('test pure component is rendering');

  return (
    <View>
      <TextInput
        value={inputVal}
        onChangeText={changedText => {
          setInputVal(changedText);
        }}
        placeholder="test"
        style={{backgroundColor: 'yellow', height: 40, margin: 10, padding: 5}}
      />

      <TextInput
        value={inputVal2}
        onChangeText={changedText => {
          setInputVal2(changedText);
        }}
        placeholder="test"
        style={{backgroundColor: 'yellow', height: 40, margin: 10, padding: 5}}
      />

      <TestFuncComp someprop={inputVal} someprop2={inputVal2} />
    </View>
  );
};

export default TestPureComponent;
