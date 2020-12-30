import {StyleSheet, Dimensions} from 'react-native';

export const styleItemDetailScreen = StyleSheet.create({
  screen: {},
  topImageBackground: {
    height: Dimensions.get('window').height / 1.6,
  },
  header: {
    top: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  // Item card
  cardContainer: {
    top: 350,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
