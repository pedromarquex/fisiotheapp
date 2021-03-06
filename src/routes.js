import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Main from './pages/Main';
import Exercise from './pages/Exercise';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={Main}
        />
        <Stack.Screen
          options={{ title: '' }}
          name="Exercise"
          component={Exercise}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
