import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {PersistanceHelper} from '../../helpers';
import {EventRegister} from 'react-native-event-listeners';
import {userActions} from '../../features/user/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import {kApiLogin} from '../../config/WebServices';
import {LoginButton, AccessToken} from 'react-native-fbsdk-next';
import Config from 'react-native-config';

const {request} = userActions;

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{flex: 1}}>
      <Text>Login</Text>
      <Text>{Config.ENV}</Text>
      <Text>{Config.API_URL}</Text>
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
      <LoginButton
        onLoginFinished={(error, result) => {
          if (error) {
            console.log('login has error: ' + result.error);
          } else if (result.isCancelled) {
            console.log('login is cancelled.');
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
              console.log(data.accessToken.toString());
            });
          }
        }}
        onLogoutFinished={() => console.log('logout.')}
      />
    </View>
  );
};

export default Login;
