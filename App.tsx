import 'react-native-gesture-handler';
import React from 'react';
import CatalogScreen from './src/views/CatalogScreen/CatalogScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ItemDetailScreen from './src/views/ItemDetailScreen/ItemDetailScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CatalogScreen">
        <Stack.Screen name="CatalogScreen" component={CatalogScreen} />
        <Stack.Screen name="ItemDetailScreen" component={ItemDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
