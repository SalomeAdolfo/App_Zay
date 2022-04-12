import {View, ImageBackground, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import {Card, Button, colors} from 'react-native-elements';
import {Madoka} from 'react-native-textinput-effects';
import baseURL from '../../routes/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const url = '/api/sanctum/token'

const LoginScreen = ({navigation}) => {

  const token = async (email1, contrasena) => {
    try {
      const res = await fetch(
        baseURL+url,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email1,
            password: contrasena,
          }),
        },
      )
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
          console.log('Success:', response['token']);
          return response['token'],
          saveData(response['token']),
          navigation.navigate('Home')
        });
    } catch (error) {
      console.log(error);
    }
  }

  const saveData = async(token)=>{
    try{
      AsyncStorage.setItem(
        'token',
        JSON.stringify({
          token: token
        })
      );
      console.log("hecho")
    }catch(error){
      console.log(error)
    }
  }

  const getToken = async () =>{
    try{
      const jsonValue = await AsyncStorage.getItem('token')
      return jsonValue != null ? JSON.parse(jsonValue): null
    }catch(e){
      console.log(e)
    }
  }
  const [name, setname] = useState(''); //obtiene el email
  const [pass, setpass] = useState(''); //obtiene la contraseña
  console.log(pass);
  return (
    
    <View style={{flex: 1}}>
      <ImageBackground
        source={{uri:'https://th.bing.com/th/id/OIP.bzYa2Nn6TiLLhd6J8YhGAwHaHa?pid=ImgDet&rs=1'}}
        resizeMode="cover"
        style={styles.image}>
        <Card
          containerStyle={{
            backgroundColor:'rgba(255,255,255,0.7)',
            borderRadius: 15,
            elevation: 10,
          }}>
            <Icon name='user' size={50} color={'red'} style={{alignSelf:'center'}} />
          <Card.Title style={{fontSize: 30, color: 'black', fontWeight: '200'}}>
            Log In
          </Card.Title>
          

          <Madoka
            label="E-mail"
            borderColor="gray"
            inputPadding={16}
            labelHeight={24}
            labelStyle={{color: 'black', fontSize: 15}}
            inputStyle={{
              color: 'black',
              fontWeight: 'bold',
              borderRadius: 15,
            }}
            onChangeText={text => setname(text)}
            value={name}
          />

          <Madoka
            label="Password"
            borderColor="gray"
            inputPadding={16}
            labelHeight={24}
            labelStyle={{color: 'black', fontSize: 15}}
            inputStyle={{
              color: 'black',
              fontWeight: 'bold',
              borderRadius: 15,
            }}
            onChangeText={password => setpass(password)}
            value={pass}
            secureTextEntry={true}
          />

          <Button
            type="outline"
            title={'Submit'}
            titleStyle={{color: 'black', fontWeight: '200', fontSize: 18}}
            buttonStyle={{
              borderRadius: 15,
              width: 200,
              alignSelf:'center',
              borderColor: 'black',
            }}
            onPress={() => token(name,pass)}
          />

          <Button
            type="clear"
            title={'No yet a membre? Sign Up'}
            titleStyle={{color: 'blue', fontWeight: '100', fontSize: 18}}
            buttonStyle={{
              marginVertical: 10,
              borderRadius: 15,
              width: 250,
              alignSelf:'flex-start',
            }}
            onPress={()=>navigation.navigate('Register')}
          />
        </Card>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  image:{
    flex:1,
    justifyContent:'center'
  }
})
export default LoginScreen;
