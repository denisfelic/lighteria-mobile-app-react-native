import {StyleSheet} from 'react-native';

const styleItem = StyleSheet.create({
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 30,
    width: 170,
    height: 170,
    borderRadius: 20,
    margin: 10,
  },

  itemImage: {
    width: 64,
    height: 64,
  },

  itemTitle: {
    fontSize: 15,
    marginTop: 15,
    color: '#999',
  },
});

export default styleItem;
