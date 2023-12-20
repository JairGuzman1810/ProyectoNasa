import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftcontainer}>
        <Text style={styles.title}>Explore</Text>
      </View>
      <View style={styles.rightcontainer}>
        <Image style={styles.image} source={require('../../assets/logo.png')} />
        {/* Se ocupa requiere para obtener la imagen. */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftcontainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightcontainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 20,
    color: '#ffffff',
  },
  image: {
    width: 60,
    height: 60,
  },
});

export default Header;
