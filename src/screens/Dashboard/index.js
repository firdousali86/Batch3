import React, {useEffect, useState, Suspense} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import {userActions} from '../../features/user/userSlice';
import {useDispatch} from 'react-redux';
// import {ApiHelper} from '../../helpers';
// import {ReactTestComponent} from '../../components';

// const {logout} = userActions;

const MyHeavyComponent = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 5 * 1000)).then(() =>
    import('../../components/ReactTestComponent'),
  );
});

// const MyHeavyComponent = React.lazy(() =>
//   import('../../components/ReactTestComponent'),
// );

const Dashboard = props => {
  const [sometext, setsometext] = useState('dashboard');
  // const dispatch = useDispatch();

  useEffect(() => {
    // ApiHelper.get(
    //   '/3/account/20656496',
    //   {},
    //   {
    //     Authorization:
    //       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzJjOTYzNjY5NzU3OGEwNTI5MWM4NWE5MWYyNmFmMSIsInN1YiI6IjY1NDM4MzM0ZTFhZDc5MDE0YmQyMGM3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.huykm4g9c8OAVMFXGW498rMtzZJT2XYKunRmZvinG70',
    //   },
    // )
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // return () => {
    //   console.log('dashboard is unmounting');
    // };
  }, []);

  return (
    <View>
      <Suspense fallback={<Text>Loading...</Text>}>
        <MyHeavyComponent />
      </Suspense>

      <Text testID="text_db">{sometext}</Text>
      <TouchableOpacity
        onPress={() => {
          // dispatch(logout());
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
