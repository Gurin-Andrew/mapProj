import React from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {styles} from './style';

interface MapScrennProps {
  lat: number;
  long: number;
}

export const MapScreen: React.FC<MapScrennProps> = ({lat, long}) => {
  return (
    <View style={styles.body}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: lat,
            longitude: long,
            latitudeDelta: 0.0121,
            longitudeDelta: 0.015,
          }}
        />
    </View>
  );
};
