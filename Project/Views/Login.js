import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { authorize } from 'react-native-app-auth';

import Configuration from '../Providers/AuthProvider';

const logo = require('../Assets/img/logo2x.png');

const config = {
  issuer: Configuration.googleAndroid.issuer,
  clientId: Configuration.googleAndroid.client_id,
  redirectUrl: Configuration.googleAndroid.redirect,
  scopes: ['openid', 'profile']
};

const styles = StyleSheet.create({
  loginView: {
    padding: 10,
    flex: 1
  },
  loginLogo: {
    flexShrink: 1,
    width: '100%'
  },
  loginActionContainer: {
    marginTop: 'auto',
    marginBottom: 12
  },
  loginAction: {
    backgroundColor: '#DE5246',
    padding: 12,
    borderRadius: 4
  },
  loginActionText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  loginLogoLabel: {
    fontSize: 18,
    textAlign: 'center'
  }
});

export default class Login extends Component {
  _authorize = async () => {
    try {
      const authState = await authorize(config)
      this.props.navigation.navigate('Dashboard');
    } catch (error) { }
  }

  render () {
    return (
      <View style={styles.loginView}>
        <Image style={styles.loginLogo} source={logo} resizeMode='contain' />
        <Text style={styles.loginLogoLabel}>Let's the party starts!</Text>
        <View style={styles.loginActionContainer}>
          <TouchableOpacity style={styles.loginAction} onPress={this._authorize}>
            <Text style={styles.loginActionText}>Login with Google</Text>
          </TouchableOpacity>
        </View>
    </View>
    )
  }
}

