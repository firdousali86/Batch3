import React from 'react';
import {View, Text, FlatList} from 'react-native';

const MyUserList = props => {
  return (
    <View>
      <FlatList
        data={props.userData}
        renderItem={({item}) => (
          <View style={{backgroundColor: 'red', margin: 10}}>
            <Text>{item.firstName}</Text>
            <Text>{item.lastName}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MyUserList;
