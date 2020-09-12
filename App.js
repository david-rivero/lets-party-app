import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Project/Views/Login';
import Dashboard from './Project/Views/Dashboard';
import LiveParty from './Project/Views/LiveParty';
import Messages from './Project/Views/Messages';
import SocialRoom from './Project/Views/SocialRoom';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false
};

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions} initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Dashboard' component={Dashboard} />
        <Stack.Screen name='LiveParty' component={LiveParty} />
        <Stack.Screen name='SocialRoom' component={SocialRoom} />
        <Stack.Screen name='Messages' component={Messages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
