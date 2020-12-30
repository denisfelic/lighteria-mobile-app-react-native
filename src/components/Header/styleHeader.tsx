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
});

export default stylesHeader;
