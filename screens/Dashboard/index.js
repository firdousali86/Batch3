import {} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {userActions} from '../../features/user/userSlice';
import {useDispatch} from 'react-redux';

const {logout} = userActions;

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>dashboard</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(logout());
        }}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
