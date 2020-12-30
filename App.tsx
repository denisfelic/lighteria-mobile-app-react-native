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
      <Stack.Navigator initialRouteName="Catalog">
        <Stack.Screen
          name="Catalog"
          component={CatalogScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ItemDetail"
          component={ItemDetailScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
