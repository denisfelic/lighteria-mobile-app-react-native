import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useItemContext} from '../../providers/ItemContextProvider';
import {styleCartButton} from './StyleCartButton';

// TODO: Mudar isso para um botão genérico que possa ser reutilizado, apenas passando o ícone, cor e local para navegação.
const CartButton: React.FC = () => {
  const {itemsCheckout} = useItemContext();
  let navigation = useNavigation();
  let itemCartCount = itemsCheckout.length;
  return (
    <TouchableOpacity
      style={styleCartButton.cartButton}
      onPress={() => navigation.navigate('Checkout')}>
      <Image
        style={styleCartButton.cartButtonIcon}
        source={require('../../assets/images/icone-sacola.png')}
      />
      <Text>{itemCartCount}</Text>
    </TouchableOpacity>
  );
};

export default CartButton;
