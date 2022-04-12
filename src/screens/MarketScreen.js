import {View, Text,StyleSheet, Image, ScrollView} from 'react-native';
import React,{useState}from 'react';
import HeaderScreen2 from './HeaderScreen2';
import {SpeedDial} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import ProveedoresScreen from '../proveedores/ProveedoresScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterProveedor from '../proveedores/RegisterProveedor';

const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer independent={true}>
    <Stack.Navigator initialRouteName='Proveedores'>
      <Stack.Screen name='Proveedores' component={ProveedoresScreen} options={{headerShown:false}}/>
    <Stack.Screen name='Register' component={RegisterProveedor} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App
