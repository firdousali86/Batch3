import {useEffect} from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';
import {LocationHelper} from '../../helpers';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

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
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{...StyleSheet.absoluteFillObject}}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
    </View>
  );
};

export default LocationScreen;
