// import {useContext} from 'react';
import {View, Text} from 'react-native';

// import {useMyContext} from '../../contexts/MyContext';
import {useUserContext} from '../../contexts/UserContext';

const Component5 = () => {
  console.log('5 got rerendered');

  //   const user = useContext(UserContext);
  //   const {somedata, setData} = useMyContext();
  const {
    state: {data},
  } = useUserContext();

  return (
    <View style={{backgroundColor: 'yellow', margin: 5}}>
      <View>
        <Text>Component 5</Text>
      </View>
      <View>
        <Text>{`Hello ${data} again!`}</Text>
      </View>
    </View>
  );
};

export default Component5;
