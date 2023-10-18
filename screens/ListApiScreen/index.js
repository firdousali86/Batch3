import {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {kApiTodos, kApiGetItems} from '../../config/WebServices';
import {ApiHelper} from '../../helpers';
import {useDispatch, useSelector} from 'react-redux';
import {itemsActions} from '../../features/items/itemsSlice';
import {PersistanceHelper} from '../../helpers';

const {request} = itemsActions;

const ListApiScreen = () => {
  const items = useSelector(state => state.item);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(request({url: kApiGetItems}));
    // requestApi();
  }, []);

  // const requestApi = async () => {
  //   const response = await ApiHelper.get(kApiTodos);

  //   setData(response);
  // };

  return (
    <View>
      <FlatList
        data={items.items}
        renderItem={({item, index}) => {
          return (
            <View style={{margin: 10, backgroundColor: 'pink'}}>
              <Text>{item.title}</Text>
              <Text>{item.id}</Text>
              <Text>{item.userId}</Text>
              <Text>{item.image}</Text>
              <Text>{item.details}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ListApiScreen;
