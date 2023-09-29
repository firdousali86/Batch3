import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {UserProfile, MyUserList} from '../../components';
import styles from './styles';

const TestStatePropsScreen = props => {
  // console.log(props.route.params);

  const [userList, setUserList] = useState([]);
  const [firstName, setFirstName] = useState(props.route.params?.firstName);
  const [lastName, setLastName] = useState(props.route.params?.lastName);

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
          onForcefulUpdateRequest={newDataFromChild => {
            setFirstName(newDataFromChild);
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

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            props.navigation.push('testStateProps');
          }}>
          <Text>Navigate</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            props.navigation.navigate('testFlex');
          }}>
          <Text>Navigate to Test flex</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Text>Navigate Go Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TestStatePropsScreen;
