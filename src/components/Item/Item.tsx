import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import styleItem from './styleItem';

const Item: React.FC = (item) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styleItem.item}
      onPress={() => {
        navigation.navigate('ItemDetail', item);
      }}>
      <Image
        style={styleItem.itemImage}
        source={item.image}
        resizeMode="contain"
      />
      <Text style={styleItem.itemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default Item;
