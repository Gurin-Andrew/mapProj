import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  body: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    top: 20,
    bot: 20,
    left: 20,
    right: 20,
    marginBottom: 20,
  },
});
