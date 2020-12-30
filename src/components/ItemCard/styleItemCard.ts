import {StyleSheet} from 'react-native';
export const styleItemCard = StyleSheet.create({
  // Item card
  card: {
    backgroundColor: '#FFF',
    width: 350,
    height: 320,
    borderRadius: 40,
    paddingVertical: 20,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  cardTitlesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardStudio: {
    fontFamily: 'OpenSans-ExtraBold',
    fontSize: 18,
  },
  cardTitle: {
    marginTop: 5,
    fontFamily: 'OpenSans-ExtraBold',
    fontSize: 22,
  },
  cardItemName: {
    marginTop: 5,
    color: '#ddd',
    fontFamily: 'OpenSans-Regular',
  },
  cardImage: {
    width: 100,
    height: 100,
  },
  cardDescription: {
    marginTop: 20,
    width: 280,
    color: '#ccc',
    fontFamily: 'OpenSans-Regular',
  },
  cardBuyContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  cardPrice: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    marginRight: 45,
  },
  cardBtnBuy: {
    backgroundColor: '#11afff',
    width: 140,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  cardBtnBuyText: {
    color: '#FFF',
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
  },
});
