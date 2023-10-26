import {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {userActions} from '../../features/user/userSlice';
import {useDispatch} from 'react-redux';

const {logout} = userActions;

const Dashboard = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      console.log('dashboard is unmounting');
    };
  }, []);

  return (
    <View>
      <Text>dashboard</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(logout());
        }}>
        <Text>Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('testClassLifecycle');
        }}>
        <Text>Call class component screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('listApiScreen');
        }}>
        <Text>list api screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
