import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import App from '../../App';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const Routes_tab = () => {
  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='LogIn' component={LoginScreen}/>
            <Stack.Screen name='Home' component={App}/>
            <Stack.Screen name='Register' component={RegisterScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes_tab