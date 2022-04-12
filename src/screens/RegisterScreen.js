import {View, ImageBackground, StyleSheet} from 'react-native';
import React,{useState}from 'react';
import {Hoshi} from 'react-native-textinput-effects';
import {Button, Card} from 'react-native-elements';
import baseURL from '../../routes/api';
const url = '/api/users'

const RegisterScreen = ({navigation}) => {
  const [correo, setCorreo] = useState('')
  const [nombre, setNombre] = useState('')
  const [contrasenia, setContrasenia] = useState('')
  console.log(correo)
  console.log(nombre)
  console.log(contrasenia)

  const postUser = async(nickname, email1, password1) =>{
      try {
        const res = await fetch(baseURL+url,
         {
           method: 'POST',
           headers:{
             Accept: 'application/json',
             'Content-Type':'application/json',
           },
           body: JSON.stringify({
             name:nickname, email:email1, password:password1,
           }),
         },
         )
         .then(response => 
           {
             if (response.status==200) {
               alert('Usuario creado')
               navigation.navigate('Home')
             }else{
               alert('Todo salió mal, usuario existente, por favor, inténtelo de nuevo')
             }
           });
    } catch (error) {
      alert(error)
    }
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={{
          uri: 'https://th.bing.com/th/id/OIP.bzYa2Nn6TiLLhd6J8YhGAwHaHa?pid=ImgDet&rs=1',
        }}
        resizeMode="cover"
        style={{...styles.image}}>
        <Card
          containerStyle={{
            backgroundColor: 'rgba(255,255,255,0.7)',
            borderRadius: 20,
            elevation: 10,
          }}>
          <Card.Title h1>Sign Up</Card.Title>
          <Hoshi
            label="Nombre"
            borderColor="blue"
            borderHeight={3}
            inputPadding={16}
            onChangeText={text => setNombre(text)}
            value={nombre}
          />
          <Hoshi
            label="Email"
            borderColor="blue"
            borderHeight={3}
            inputPadding={16}
            onChangeText={text => setCorreo(text)}
            value={correo}
          />
          <Hoshi
            label="Password"
            borderColor="blue"
            borderHeight={3}
            inputPadding={16}
            secureTextEntry={true}
            onChangeText={text => setContrasenia(text)}
            value={contrasenia}
          />
          <Hoshi
            label="Confirm password"
            borderColor="blue"
            borderHeight={3}
            inputPadding={16}
            secureTextEntry={true}
          />

          <Button
            type="outline"
            title={'Submit'}
            titleStyle={{color: 'blue', fontSize: 20, fontWeight: '100'}}
            buttonStyle={{
              borderColor: 'black',
              marginVertical: 15,
              borderRadius: 10,
              width: '80%',
              alignSelf: 'center',
              height: 55,
            }}
            onPress={() => postUser(nombre,correo,contrasenia)}
          />
        </Card>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default RegisterScreen;
