import React from 'react';
import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {useItemContext} from '../../providers/ItemContextProvider';

// import { Container } from './styles';

const CheckoutScreen: React.FC = () => {
  const {itemsCheckout} = useItemContext();
  console.log(itemsCheckout);
  // TODO: Refator para utilizar um componente de List para exibir os itens do carrinho
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text>Checkout</Text>
        <View>
          {itemsCheckout.map((item) => {
            return <Text>{item.title}</Text>;
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CheckoutScreen;
