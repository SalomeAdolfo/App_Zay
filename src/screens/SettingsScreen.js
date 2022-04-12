import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {Card} from 'react-native-elements';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SalidasScreen from '../menu/SalidasScreen';
import VentasScreen from '../menu/VentasScreen';
import HeaderScreen3 from './HeaderScreen3';

const Stack = createNativeStackNavigator();

function Menu_principal({navigation}) {
  return (
    <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
      <View>
        <HeaderScreen3 />
      </View>
      <View style={{justifyContent: 'center', flex: 1}}>
        <Pressable onPress={() => navigation.navigate('Ventas')}>
          <Card containerStyle={{...styles.card}}>
            <Image
              source={{
                uri: 'https://www.logolynx.com/images/logolynx/e5/e5b36491188521d11b5e3f2c8f3a801c.png',
              }}
              style={{...styles.img}}
            />
            <Text style={{...styles.text}}>Ventas</Text>
          </Card>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Salidas')}>
          <Card containerStyle={{...styles.card}}>
            <Image
              source={{
                uri: 'https://th.bing.com/th/id/OIP.8YABTltnxcqvjK8Y2CnM4AHaE7?pid=ImgDet&rs=1',
              }}
              style={{...styles.img}}
            />
            <Text style={{...styles.text}}>Salidas</Text>
          </Card>
        </Pressable>
      </View>
    </View>
  );
}

function menu() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Menu_principal}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Salidas" component={SalidasScreen} />
        <Stack.Screen name="Ventas" component={VentasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    shadowColor: 'orange',
    elevation: 12,
  },
  img: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  text: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: '100',
  },
});
export default menu;
