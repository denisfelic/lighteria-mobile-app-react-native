import {StyleSheet} from 'react-native';

const stylesHeader = StyleSheet.create({
  // Header Component
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 35,
  },
  headerTitle: {
    fontSize: 35,
    marginLeft: 40,
    fontFamily: 'OpenSans-ExtraBold',
  },

  // Button Component
  cartButton: {
    backgroundColor: '#fff',
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginRight: 20,
  },
  cartButtonIcon: {
    width: 35,
    height: 35,
  },
});

export default stylesHeader;
