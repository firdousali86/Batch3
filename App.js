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

import {UserProfile, MyUserList} from './components';

import styles from './style';

function App() {
  const [userList, setUserList] = useState([]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <UserProfile
          childrenStyle={styles.userProfileStyle}
          onSubmitPressed={fetchedData => {
            setUserList([...userList, fetchedData]);
          }}
          onDeletePressed={() => {
            setUserList([]);
          }}>
          <Text>first child node</Text>
          <Text>second child node</Text>
          <Text>third child node</Text>

          <Image
            style={styles.imageStyle}
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          />
        </UserProfile>

        {userList && userList.length > 0 && <MyUserList userData={userList} />}
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
