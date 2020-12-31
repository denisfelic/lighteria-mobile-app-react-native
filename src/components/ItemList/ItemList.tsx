import React, {Fragment} from 'react';
import {FlatList, Text, View} from 'react-native';
import dataApi from '../../providers/dataApi';
import Item from '../Item/Item';
import styleItemList from './styleItemList';

const DATA = dataApi;
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
