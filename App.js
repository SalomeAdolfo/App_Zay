import * as React from 'react';
import { Text, View ,Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackScreen from './src/stacks/HomeStackScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import RankingStackScreen from './src/stacks/RankigStackScreen';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import LoginStack from './src/stacks/LoginStackScreen';
import MarketStackScreen from './src/stacks/MarketStackScreen';
import SettingsStackScreen from './src/stacks/SettingsStackScreen';
import LoginStackScreen from './src/stacks/LoginStackScreen';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator activeColor='#FF7F00' inactiveColor='black' barStyle={{backgroundColor: 'white',
      left: 20,
      position: 'absolute',
      right: 20,
      height: 90,
      bottom: 19,
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 15,
    }} initialRouteName="Productos" backBehavior='history'>
        <Tab.Screen name="Productos" component={HomeStackScreen}  options={{
          tabBarIcon: ({focused})=> (
              <Icon name="tags" size={25} style={{color: focused ? '#FF7F00' : '#393D42'}}  />
          ),  
        }}/>
        <Tab.Screen name='Proveedores' component={MarketStackScreen} options={{
          tabBarIcon: ({focused}) => (
            <Icon name='users' size={25} color='black' style={{color: focused ? '#FF7F00' : '#393D42'}}/>
          ),
        }}/>
        <Tab.Screen name='Menú' component={SettingsStackScreen} options={{
          tabBarIcon: ({focused}) => (
            <Icon name="th-large" size={25} style={{color: focused ? '#FF7F00' : '#393D42'}} />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}