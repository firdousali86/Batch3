import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import {UserProfile} from '../../components';
import styles from './styles';

const TestStatePropsScreen = () => {
  const [userList, setUserList] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <TextInput
          value={firstName}
          onChangeText={changedText => {
            setFirstName(changedText);
          }}
          style={{backgroundColor: 'yellow', height: 40, margin: 10}}
        />

        <TextInput
          value={lastName}
          onChangeText={changedText => {
            setLastName(changedText);
          }}
          style={{backgroundColor: 'yellow', height: 40, margin: 10}}
        />

        <UserProfile
          firstName={firstName}
          lastName={lastName}
          city={'Karachi'}
          country={'Pakistan'}
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
};

export default TestStatePropsScreen;
