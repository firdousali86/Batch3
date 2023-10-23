import {useState, forwardRef, useImperativeHandle, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const markers = [
  {latitude: 0, longitude: 0},
  {latitude: 0.5, longitude: 0.5},
  {latitude: 1, longitude: 1},
  {latitude: 1.5, longitude: 1.5},
  {latitude: 2, longitude: 2},
  {latitude: 2.5, longitude: 2.5},
];

const MapControl = forwardRef((props, ref) => {
  const mapRef = useRef(null);
  const [markersColl, setMarkersColl] = useState(markers);

  useImperativeHandle(ref, () => ({
    testmapaccess: () => {
      console.log('i am able to access the control methods');
    },
    aToR: (region, duration) => {
      mapRef.current.animateToRegion(region, duration);
    },
    fToC: (coordinates, options) => {
      mapRef.current.fitToCoordinates(coordinates, options);
    },
  }));

  return (
    <MapView
      ref={mapRef}
      onLongPress={arg => {
        const {coordinate} = arg.nativeEvent;
        setMarkersColl([
          ...markersColl,
          {latitude: coordinate.latitude, longitude: coordinate.longitude},
        ]);
      }}
      provider={PROVIDER_GOOGLE}
      style={{...StyleSheet.absoluteFillObject}}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}>
      {markersColl.map(thisMarker => {
        return (
          <Marker
            draggable
            coordinate={{
              latitude: thisMarker.latitude,
              longitude: thisMarker.longitude,
            }}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>a</Text>
            </View>
          </Marker>
        );
      })}
    </MapView>
  );
});

export default MapControl;
