import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ImageBackground} from 'react-native';
import {StatusBar, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButton from '../../components/BackButton/BackButton';
import CartButton from '../../components/CartButton/CartButton';
import ItemCard from '../../components/ItemCard/ItemCard';
import {ItemInterface} from '../../components/ItemInterface';
import {styleItemDetailScreen} from './styleItemDetailScreen';

const ItemDetailScreen: React.FC = ({route}) => {
  const item: ItemInterface = route.params;
  return (
    <SafeAreaView style={styleItemDetailScreen.screen}>
      <StatusBar barStyle="dark-content" />

      <ImageBackground
        style={styleItemDetailScreen.topImageBackground}
        source={require('../../assets/images/bgimg.jpg')}
        resizeMode="cover">
        <View style={styleItemDetailScreen.header}>
          <BackButton />
          <CartButton />
        </View>

        <View style={styleItemDetailScreen.cardContainer}>
          <ItemCard {...item} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ItemDetailScreen;
