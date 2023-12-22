/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
//import Home from './src/views/Home'; //Se llama la carpeta Home, y por defecto agarra index
import Routes from './src/routes';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      {/* Routes nos sirve para redireccionar */}
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
