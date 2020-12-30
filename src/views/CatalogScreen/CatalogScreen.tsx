import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Header from '../../components/Header/Header';
import ItemList from '../../components/ItemList/ItemList';

// TODO: Create a component to envolve all screens in application, with have SafeAreaView and StatusBar components inside him.
const CatalogScreen: React.FC = () => {
  return (
    <SafeAreaView style={styleApp.screen}>
      <StatusBar barStyle="dark-content" />
      <Header />
      <ItemList />
    </SafeAreaView>
  );
};

const styleApp = StyleSheet.create({
  // Category Component
  screen: {
    backgroundColor: '#eee',
    flex: 1,
  },
});

export default CatalogScreen;
