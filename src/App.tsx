/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './navigation';
import {PersistanceHelper, CryptoHelper} from './helpers';
import {store} from './store';
import {Provider} from 'react-redux';
import {AppStateN} from './components';

function App() {
  useEffect(() => {
    // PersistanceHelper.setValue('testkey', 'testvalue');
    PersistanceHelper.setObject('testkey', {a: 'b', c: 'd', e: 'f'});

    const encryptedString = CryptoHelper.encryptString(
      'hey this is plain text',
    );

    console.log(encryptedString);
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
        <AppStateN
          handleAppState={nextState => {
            console.log(nextState);
          }}
        />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
