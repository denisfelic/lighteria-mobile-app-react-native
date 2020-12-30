import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styleBackButton} from './styleBackButton';

const BackButton: React.FC = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styleBackButton.backButton}
      onPress={() => navigation.goBack()}>
      <Image
        style={styleBackButton.backButtonIcon}
        source={require('../../assets/images/flecha-esquerda.png')}
      />
    </TouchableOpacity>
  );
};

export default BackButton;
