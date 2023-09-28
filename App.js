/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import UserProfile from './components/UserProfile';
import MyUserList from './components/MyUserList';

function App() {
  const [userList, setUserList] = useState([]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <UserProfile
          childrenStyle={{backgroundColor: 'red', margin: 10}}
          onSubmitPressed={fetchedData => {
            setUserList([...userList, fetchedData]);
          }}
          onDeletePressed={() => {
            setUserList([]);
          }}>
          <Text>first child node</Text>
          <Text>second child node</Text>
          <Text>third child node</Text>
        </UserProfile>

        {userList && userList.length > 0 && <MyUserList userData={userList} />}
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
