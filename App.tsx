import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import CatalogScreen from './src/views/CatalogScreen/CatalogScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styleApp.screen}>
        <CatalogScreen />
      </SafeAreaView>
    </>
  );
};

const styleApp = StyleSheet.create({
  // Category Component
  screen: {
    backgroundColor: '#eee',
    flex: 1,
  },
});

export default App;
