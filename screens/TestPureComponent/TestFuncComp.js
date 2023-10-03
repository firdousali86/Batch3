import {useState, memo, useMemo} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';

const TestFuncComp = props => {
  const [testvalue, settestvalue] = useState('');
  const [count, setCount] = useState(0);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  console.log('render of test func component');

  return (
    <View>
      <Text>test func comp</Text>
      <TextInput
        value={testvalue}
        onChangeText={changedText => {
          settestvalue(changedText);
        }}
        placeholder="class textinput"
        style={{backgroundColor: 'pink', height: 40, padding: 5, margin: 10}}
      />

      <Text>{count}</Text>

      <TouchableOpacity
        onPress={() => {
          setCount(c => c + 1);
        }}>
        <Text>+</Text>
      </TouchableOpacity>

      <Text>{calculation}</Text>
    </View>
  );
};

const expensiveCalculation = num => {
  console.log('Calculating...');

  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }

  return num;
};

export default memo(TestFuncComp);
