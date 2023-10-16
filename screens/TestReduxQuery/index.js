import {} from 'react';
import {View, Text} from 'react-native';
import {useGetTodosQuery} from '../../config/todosApi';

const TestReduxQuery = () => {
  const {data, error, isLoading} = useGetTodosQuery();

  console.log('DATA:' + data);
  console.log('Error:' + error);
  console.log('isLoading:' + isLoading);

  return (
    <View>
      <Text>test</Text>
    </View>
  );
};

export default TestReduxQuery;
