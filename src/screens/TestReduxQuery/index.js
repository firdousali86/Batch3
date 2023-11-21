import {View, Text, Button} from 'react-native';
import {useGetTodosQuery} from '../../config/todosApi';
import {useGetAllItemsQuery, usePostItemMutation} from '../../config/itemApi';
import React from 'react';
import {useSelector} from 'react-redux';

const TestReduxQuery = () => {
  // const {data, error, isLoading} = useGetTodosQuery();
  const {data, error, isLoading} = useGetAllItemsQuery();
  const [postItem, {isLoading: isUpdating}] = usePostItemMutation();
  const user = useSelector(state => state.user);

  console.log(data);
  console.log('Error:' + error);
  console.log('isLoading:' + isLoading);

  return (
    <View>
      <Text>test</Text>

      <Button
        title={'Add item'}
        onPress={() => {
          const newItem = {
            title: 'string',
            image: 'string',
            details: 'string',
            accessToken: user?.data?.id,
          };

          postItem(newItem);
        }}
      />
    </View>
  );
};

export default TestReduxQuery;
