import {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {PersistanceHelper} from '../../helpers';
import {EventRegister} from 'react-native-event-listeners';
import {userActions} from '../../features/user/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import {kApiLogin} from '../../config/WebServices';

const {request} = userActions;

const Login = () => {
  const dispatch = useDispatch();

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
        autoCapitalize={'none'}
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
        onPress={() => {
          dispatch(request({url: kApiLogin, data: {email, password}}));

          // PersistanceHelper.setValue('userEmail', email);
          // EventRegister.emit('LoginEvent', {
          //   test: 'test object',
          //   source: 'passed from login screen',
          // });
        }}
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
