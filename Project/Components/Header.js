import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const logo = require('../Assets/img/logo.png');
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9B25BB',
    height: 75,
    alignItems: 'center'
  },
  headerLogo: {
    width: 150
  }
});

export default Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.headerLogo} source={logo} resizeMode='contain' />
    </View>
  );
}
