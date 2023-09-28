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
  Platform,
} from 'react-native';

import {UserProfile, MyUserList} from './components';

import styles from './style';

function App() {
  const [userList, setUserList] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'pink',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <Text>{Platform.OS === 'android' ? 'ANDROID' : 'IOS'}</Text>
      <View
        style={{
          width: 80,
          height: 80,
          backgroundColor: 'red',
          alignSelf: 'flex-start',
        }}></View>
      <View style={{width: 80, height: 80, backgroundColor: 'yellow'}}></View>
      <View
        style={{
          width: 80,
          height: 80,
          backgroundColor: 'green',
          alignSelf: 'flex-end',
        }}></View>
      <Text>sample text</Text>
    </View>
  );

  // return (
  //   <SafeAreaView style={{flex: 1}}>
  //     <ScrollView>
  //       <TextInput
  //         value={firstName}
  //         onChangeText={changedText => {
  //           setFirstName(changedText);
  //         }}
  //         style={{backgroundColor: 'yellow', height: 40, margin: 10}}
  //       />

  //       <TextInput
  //         value={lastName}
  //         onChangeText={changedText => {
  //           setLastName(changedText);
  //         }}
  //         style={{backgroundColor: 'yellow', height: 40, margin: 10}}
  //       />

  //       <UserProfile
  //         firstName={firstName}
  //         lastName={lastName}
  //         city={'Karachi'}
  //         country={'Pakistan'}
  //         childrenStyle={styles.userProfileStyle}
  //         onSubmitPressed={fetchedData => {
  //           setUserList([...userList, fetchedData]);
  //         }}
  //         onDeletePressed={() => {
  //           setUserList([]);
  //         }}>
  //         <Text>first child node</Text>
  //         <Text>second child node</Text>
  //         <Text>third child node</Text>

  //         <Image
  //           style={styles.imageStyle}
  //           source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
  //         />
  //       </UserProfile>

  //       {userList && userList.length > 0 && <MyUserList userData={userList} />}
  //     </ScrollView>
  //   </SafeAreaView>
  // );
}

export default App;
