import {useEffect, useState} from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';
import {LocationHelper} from '../../helpers';
import {MapControl} from '../../components';

const LocationScreen = () => {
  useEffect(() => {
    LocationHelper.checkLocationPermission(
      () => {
        LocationHelper.trackUserLocation(
          locationObject => {
            console.log(locationObject);
          },
          error => {
            console.log(error);
          },
        );
      },
      error => {
        console.log(error);
      },
    );
  }, []);

  return (
    <View style={{flex: 1}}>
      <MapControl />
    </View>
  );
};

export default LocationScreen;
