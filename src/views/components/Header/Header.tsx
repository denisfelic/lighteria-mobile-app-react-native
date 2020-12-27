import React from 'react';

import {Text, Image, View, TouchableOpacity} from 'react-native';
import styleHeader from './styleHeader';

function Header() {
  return (
    <View style={styleHeader.header}>
      <Text style={styleHeader.headerTitle}>LIGHTERIA</Text>
      <TouchableOpacity style={styleHeader.cartButton}>
        <Image
          style={styleHeader.cartButtonIcon}
          source={require('../../../assets/images/icone-sacola.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Header;
