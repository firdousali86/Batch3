import {useEffect, useState} from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity} from 'react-native';
import {kApiTodos, kApiGetItems, kApiPostItem} from '../../config/WebServices';
import {ApiHelper} from '../../helpers';
import {useDispatch, useSelector} from 'react-redux';
import {itemsActions} from '../../features/items/itemsSlice';
import {PersistanceHelper} from '../../helpers';
import {userActions} from '../../features/user/userSlice';

const {request} = itemsActions;

const ListApiScreen = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [details, setDetails] = useState('');

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
        ListFooterComponent={
          <View style={{flex: 1, marginHorizontal: 10}}>
            <TextInput
              placeholder="Title"
              value={title}
              onChangeText={changedText => {
                setTitle(changedText);
              }}
              style={{
                height: 40,
                backgroundColor: 'pink',
                margin: 10,
                padding: 5,
              }}
            />
            <TextInput
              placeholder="Image"
              value={image}
              onChangeText={changedText => {
                setImage(changedText);
              }}
              style={{
                height: 40,
                backgroundColor: 'pink',
                margin: 10,
                padding: 5,
              }}
            />
            <TextInput
              placeholder="Details"
              value={details}
              onChangeText={changedText => {
                setDetails(changedText);
              }}
              style={{
                height: 40,
                backgroundColor: 'pink',
                margin: 10,
                padding: 5,
              }}
            />
            <TouchableOpacity
              style={{
                height: 40,
                marginHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'yellow',
              }}
              onPress={() => {
                dispatch(
                  request({
                    url: kApiPostItem,
                    data: {title, image, details, requestType: 'POST'},
                  }),
                );
              }}>
              <Text>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                dispatch(userActions.logout());
              }}>
              <Text>logout</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};

export default ListApiScreen;
