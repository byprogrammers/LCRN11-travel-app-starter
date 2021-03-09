import React from 'react';
import { Dashboard, Place } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Dashboard'}
      >
        <Stack.Screen
          name="Dashboard"
          component={Tabs}
        />

        <Stack.Screen
          name="Place"
          component={Place}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;