import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styleCartButton} from './StyleCartButton';

// TODO: Mudar isso para um botão genérico que possa ser reutilizado, apenas passando o ícone, cor e local para navegação.
const CartButton: React.FC = () => {
  return (
    <TouchableOpacity style={styleCartButton.cartButton}>
      <Image
        style={styleCartButton.cartButtonIcon}
        source={require('../../assets/images/icone-sacola.png')}
      />
    </TouchableOpacity>
  );
};

export default CartButton;
