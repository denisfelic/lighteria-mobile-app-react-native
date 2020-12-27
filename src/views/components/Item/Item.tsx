import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import styleItem from './styleItem';

const Item: React.FC = ({title, image}) => {
  return (
    <TouchableOpacity style={styleItem.item}>
      <Image style={styleItem.itemImage} source={image} resizeMode="contain" />
      <Text style={styleItem.itemTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Item;
