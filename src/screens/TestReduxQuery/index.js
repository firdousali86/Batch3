import {View, Text} from 'react-native';
import {useGetTodosQuery} from '../../config/todosApi';
import {useGetAllItemsQuery} from '../../config/itemApi';
import React from 'react';

const TestReduxQuery = () => {
  // const {data, error, isLoading} = useGetTodosQuery();
  const {data, error, isLoading} = useGetAllItemsQuery();

  console.log(data);
  console.log('Error:' + error);
  console.log('isLoading:' + isLoading);

  return (
    <View>
      <Text>test</Text>
    </View>
  );
};

export default TestReduxQuery;
