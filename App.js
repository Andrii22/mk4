import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './screens/mainScreen';
import LengthScreen from './screens/lengthScreen';
import TimeScreen from './screens/timeScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Main" >
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: 'Конвертер' }}
        />
        <Stack.Screen
          name="Length"
          component={LengthScreen}
          options={{title:"Довжина"}}
        />
        <Stack.Screen
          name="Time"
          component={TimeScreen}
          options={{title:"Час"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
