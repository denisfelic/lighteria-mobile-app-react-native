import {StyleSheet} from 'react-native';

const styleItemList = StyleSheet.create({
  // Category Header Component
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    paddingHorizontal: 30,
    color: '#999',
    fontFamily: 'OpenSans-Regular',
  },

  headerLine: {
    width: 115,
    height: 0.9,
    backgroundColor: '#999',
  },

  // Item List
  itemList: {
    marginTop: 10,
    paddingTop: 20,
    alignSelf: 'center',
    // width: 420,
    // TODO: Modificar a largura do container da ListItem para que elá tenha a mesma que o dispositivo.
  },
});
export default styleItemList;
