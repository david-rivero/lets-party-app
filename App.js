import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Views/Login';
import Dashboard from './Views/Dashboard';
import LiveParty from './Views/LiveParty';
import Messages from './Views/Messages';
import SocialRoom from './Views/SocialRoom';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false
};

export default App = () => {
  return (
    <NavigationContainer screenOptions={screenOptions} initialRouteName='Login'>
      <Stack.Navigator name='login' component={Login} />
      <Stack.Navigator name='home' component={Dashboard} />
      <Stack.Navigator name='live-party' component={LiveParty} />
      <Stack.Navigator name='social-room' component={SocialRoom} />
      <Stack.Navigator name='messages' component={Messages} />
    </NavigationContainer>
  );
};
