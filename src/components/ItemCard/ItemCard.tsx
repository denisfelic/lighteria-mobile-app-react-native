import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ItemInterface} from '../ItemInterface';
import {styleItemCard} from './styleItemCard';

const ItemCard = (item: ItemInterface) => {
  const navigation = useNavigation();
  const price = item.price.toString().replace('.', ',');

  return (
    <View style={styleItemCard.card}>
      <View style={styleItemCard.cardTitlesContainer}>
        <View>
          <Text numberOfLines={1} style={styleItemCard.cardStudio}>
            {item.studio}
          </Text>
          <Text numberOfLines={1} style={styleItemCard.cardTitle}>
            {item.title}
          </Text>
          <Text numberOfLines={1} style={styleItemCard.cardItemName}>
            {item.itemName}
          </Text>
        </View>
        <Image
          style={styleItemCard.cardImage}
          source={item.image}
          resizeMode="contain"
        />
      </View>

      <Text numberOfLines={3} style={styleItemCard.cardDescription}>
        {item.itemDescription}
      </Text>
      <View style={styleItemCard.cardBuyContainer}>
        <Text numberOfLines={1} style={styleItemCard.cardPrice}>
          R$ {price}
        </Text>
        <TouchableOpacity
          style={styleItemCard.cardBtnBuy}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styleItemCard.cardBtnBuyText}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemCard;
