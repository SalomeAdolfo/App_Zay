//Este screen es solo la parte superior de la mayoria de las Screens, se importó para que
//sea reusable.
import {View, ImageBackground, Image, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderScreen2 = () => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(255,165,0,0.9)',
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
      }}>
    <View>
        <Text style={{
          color: 'black',
          fontSize: 25,
      
      }}>
            Proveedores
         </Text>
    </View>
    </View>
  );
};

export default HeaderScreen2;
