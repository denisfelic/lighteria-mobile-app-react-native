import React from 'react';

import {Text, View} from 'react-native';
import CartButton from '../CartButton/CartButton';
import styleHeader from './styleHeader';

function Header() {
  return (
    <View style={styleHeader.header}>
      <Text style={styleHeader.headerTitle}>LIGHTERIA</Text>
      <CartButton />
    </View>
  );
}

export default Header;
