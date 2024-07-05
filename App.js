import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import GeneratorScreen from './src/screens/GeneratorScreen';
import SaveColorScreen from './src/screens/SaveColorScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="GeneratorScreen" component={GeneratorScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Anasayfa"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Oluşturucu" component={GeneratorScreen} />
      <Tab.Screen name="Anasayfa" component={StackNavigator} />
      <Tab.Screen name="Kaydedilenler" component={SaveColorScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
