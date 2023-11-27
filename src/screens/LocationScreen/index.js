import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Platform, StyleSheet, Button} from 'react-native';
import {LocationHelper} from '../../helpers';
import {MapControl} from '../../components';

const LocationScreen = () => {
  const myMapControlRef = useRef(null);

  useEffect(() => {
    LocationHelper.checkLocationPermission(
      () => {
        LocationHelper.fetchLocation(
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
      <MapControl ref={myMapControlRef} />
      <Button
        title={'Press here'}
        onPress={() => {
          // myMapControlRef.current.testmapaccess();
          // myMapControlRef.current.aToR(
          //   {
          //     latitude: 74.006,
          //     longitude: 40.7128,
          //     latitudeDelta: 0.015,
          //     longitudeDelta: 0.0121,
          //   },
          //   5000,
          // );
          myMapControlRef.current.fToC(
            [
              {latitude: 0, longitude: 0},
              {latitude: 0.5, longitude: 0.5},
              {latitude: 1, longitude: 1},
              {latitude: 1.5, longitude: 1.5},
              {latitude: 2, longitude: 2},
              {latitude: 2.5, longitude: 2.5},
            ],
            {
              edgePadding: {top: 10, bottom: 10, left: 50, right: 50},
              animated: true,
            },
          );
        }}
      />
    </View>
  );
};

export default LocationScreen;
