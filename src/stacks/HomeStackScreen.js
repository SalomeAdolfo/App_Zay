import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen1 from '../screens/HomeScreen';

const HomeStackScreen = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false, //Sirve para ocultar el nombre del header
      }}>
      <HomeStack.Screen name="Green Life" component={HomeScreen1} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
