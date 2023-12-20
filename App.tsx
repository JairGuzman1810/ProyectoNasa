/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Platform, SafeAreaView, StyleSheet} from 'react-native';
import Home from './src/views/Home'; //Se llama la carpeta Home, y por defecto agarra index

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071A5D',
    paddingTop: Platform.OS === 'android' ? 30 : 0, //ASI SE PONE EN REACT NATIVE
  },
});

export default App;
