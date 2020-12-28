import React from 'react';
import {Button} from 'react-native';
import {StatusBar, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header/Header';

const ItemDetailScreen: React.FC = ({navigation}) => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <Header />
      <View>
        <Text>Item Detail Screen '=)'</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Catalog')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ItemDetailScreen;
