import {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{flex: 1}}>
      <Text>Login</Text>

      <TextInput
        value={email}
        onChangeText={changedText => {
          setEmail(changedText);
        }}
        placeholder="Email"
        style={{backgroundColor: 'grey', padding: 10, margin: 10, height: 40}}
      />
      <TextInput
        value={password}
        onChangeText={changedText => {
          setPassword(changedText);
        }}
        secureTextEntry
        placeholder="Password"
        style={{backgroundColor: 'grey', padding: 10, margin: 10, height: 40}}
      />

      <TouchableOpacity
        onPress={() => {}}
        style={{
          marginHorizontal: 10,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'blue',
        }}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
