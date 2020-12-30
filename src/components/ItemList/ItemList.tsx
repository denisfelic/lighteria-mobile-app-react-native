import React, {Fragment} from 'react';
import {FlatList, Text, View} from 'react-native';
import Item from '../Item/Item';
import styleItemList from './styleItemList';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Third Item 1',
    image: require('../../assets/images/01-tablelamps.png'),
    studio: 'Soft Lens',
    itemName: 'Luminária Led Inteligênte',
    price: 123.99,
    itemDescription:
      'Produzida em impressora 3D, essa linda luminária em formato de lua cheia fornece luminosidade com um simples toque em sua superfície, bastando estar conectada a uma fonte de energia através de um cabo USB. Possui cores RGB e basta um toque para alterar entre as cores BRANCA QUENTE, AZUL, VERMELHA e VERDE. Possui também o modo randômico de cores, iluminando o ambiente e deixando-o bastante colorido.',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Third Item 2',
    image: require('../../assets/images/01-tablelamps.png'),
    studio: 'Soft Lens',
    itemName: 'Luminária Led Inteligênte',
    price: 123.99,
    itemDescription:
      'Produzida em impressora 3D, essa linda luminária em formato de lua cheia fornece luminosidade com um simples toque em sua superfície, bastando estar conectada a uma fonte de energia através de um cabo USB. Possui cores RGB e basta um toque para alterar entre as cores BRANCA QUENTE, AZUL, VERMELHA e VERDE. Possui também o modo randômico de cores, iluminando o ambiente e deixando-o bastante colorido.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item 3',
    image: require('../../assets/images/02-ceilinglamps.png'),
    studio: 'Soft Lens',
    itemName: 'Luminária Led Inteligênte',
    price: 123.99,
    itemDescription:
      'Produzida em impressora 3D, essa linda luminária em formato de lua cheia fornece luminosidade com um simples toque em sua superfície, bastando estar conectada a uma fonte de energia através de um cabo USB. Possui cores RGB e basta um toque para alterar entre as cores BRANCA QUENTE, AZUL, VERMELHA e VERDE. Possui também o modo randômico de cores, iluminando o ambiente e deixando-o bastante colorido.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Third Item 4',
    image: require('../../assets/images/03-sconces.png'),
    studio: 'Soft Lens',
    itemName: 'Luminária Led Inteligênte',
    price: 123.99,
    itemDescription:
      'Produzida em impressora 3D, essa linda luminária em formato de lua cheia fornece luminosidade com um simples toque em sua superfície, bastando estar conectada a uma fonte de energia através de um cabo USB. Possui cores RGB e basta um toque para alterar entre as cores BRANCA QUENTE, AZUL, VERMELHA e VERDE. Possui também o modo randômico de cores, iluminando o ambiente e deixando-o bastante colorido.',
  },

  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Third Item 5',
    image: require('../../assets/images/04-floorlamps.png'),
    studio: 'Soft Lens',
    itemName: 'Luminária Led Inteligênte',
    price: 123.99,
    itemDescription:
      'Produzida em impressora 3D, essa linda luminária em formato de lua cheia fornece luminosidade com um simples toque em sua superfície, bastando estar conectada a uma fonte de energia através de um cabo USB. Possui cores RGB e basta um toque para alterar entre as cores BRANCA QUENTE, AZUL, VERMELHA e VERDE. Possui também o modo randômico de cores, iluminando o ambiente e deixando-o bastante colorido.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Third Item 6',
    image: require('../../assets/images/05-lightdecor.png'),
    studio: 'Soft Lens',
    itemName: 'Luminária Led Inteligênte',
    price: 123.99,
    itemDescription:
      'Produzida em impressora 3D, essa linda luminária em formato de lua cheia fornece luminosidade com um simples toque em sua superfície, bastando estar conectada a uma fonte de energia através de um cabo USB. Possui cores RGB e basta um toque para alterar entre as cores BRANCA QUENTE, AZUL, VERMELHA e VERDE. Possui também o modo randômico de cores, iluminando o ambiente e deixando-o bastante colorido.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Third Item 7',
    image: require('../../assets/images/06-garlands.png'),
    studio: 'Soft Lens',
    itemName: 'Luminária Led Inteligênte',
    price: 123.99,
    itemDescription:
      'Produzida em impressora 3D, essa linda luminária em formato de lua cheia fornece luminosidade com um simples toque em sua superfície, bastando estar conectada a uma fonte de energia através de um cabo USB. Possui cores RGB e basta um toque para alterar entre as cores BRANCA QUENTE, AZUL, VERMELHA e VERDE. Possui também o modo randômico de cores, iluminando o ambiente e deixando-o bastante colorido.',
  },
];

const ItemList: React.FC = () => {
  return (
    <Fragment>
      <View style={styleItemList.header}>
        <View style={styleItemList.headerLine} />
        <Text style={styleItemList.headerTitle}>Categorias</Text>
        <View style={styleItemList.headerLine} />
      </View>

      <FlatList
        style={styleItemList.itemList}
        numColumns={2}
        horizontal={false}
        data={DATA}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={(item) => item.id}
      />
    </Fragment>
  );
};

export default ItemList;
