/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, Text, View, TextInput, ScrollView} from 'react-native';
import UserProfile from './components/UserProfile';
import MyUserList from './components/MyUserList';

function App() {
  const [userList, setUserList] = useState([]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <UserProfile
          onSubmitPressed={fetchedData => {
            setUserList([...userList, fetchedData]);
          }}
          onDeletePressed={() => {
            setUserList([]);
          }}
        />

        {userList && userList.length > 0 && <MyUserList userData={userList} />}
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
