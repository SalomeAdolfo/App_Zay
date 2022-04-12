import {View, Text,Dimensions, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useState} from 'react';
import HeaderScreen1 from './HeaderScreen1';
import { Card, Button } from 'react-native-elements';

var { height } = Dimensions.get('window');
var box_count = 2;
var box_height = height / box_count;


const RankingScreen = () => {
  const [id, setId] = useState('');
  const [id_producto,setProducto]= useState('');
  const [cantidad, setCantidad] = useState('');
  const [Total, setTotal] = useState('');
  return (
    <View style={{flex:1}}>
      <View style={{}}>
        <HeaderScreen1 />
      </View>
      <View style={{justifyContent:'center', flex:3}}>
      <Card containerStyle={{...styles.card}}>
        <Card.Title style={{fontSize:25}}>Registro de ventas</Card.Title>
      <View style={{...styles.inputs}}>
      <Icon name='id-badge' color={'orange'} size={30} style={{alignSelf:'center'}}/>
        <TextInput
        placeholder='ID'
        placeholderTextColor={'black'}
        style={{
          marginHorizontal:10,
          color:'black',
          borderRadius: 15,
          shadowColor:'red',
          borderColor:'black',
          borderWidth: 0.5,
          width: '80%'
        }}
        onChangeText={text => setId(text)}
        value={id}
        />
      </View>

      <View style={{...styles.inputs}}>
      <Icon name='tags' color={'orange'} size={27} style={{alignSelf:'center'}}/>
        <TextInput
        placeholder='ID_Producto'
        placeholderTextColor={'black'}
        style={{
          marginHorizontal:10,
          color:'black',
          borderRadius: 15,
          shadowColor:'red',
          borderColor:'black',
          borderWidth: 0.5,
          width: '80%'
        }}
        onChangeText={text => setProducto(text)}
        value={id_producto}
        />
      </View>

      <View style={{...styles.inputs}}>
      <Icon name='info' color={'orange'} size={30} style={{alignSelf:'center'}}/>
        <TextInput
        placeholder='Cantidad'
        placeholderTextColor={'black'}
        style={{
          marginHorizontal:10,
          color:'black',
          borderRadius: 15,
          shadowColor:'red',
          borderColor:'black',
          borderWidth: 0.5,
          width: '80%'
        }}
        onChangeText={text => setCantidad (text)}
        value={cantidad}
        />
      </View>

      <View style={{...styles.inputs}}>
      <Icon name='dollar' color={'orange'} size={30} style={{alignSelf:'center'}}/>
        <TextInput
        placeholder='Total'
        placeholderTextColor={'black'}
        style={{
          marginHorizontal:10,
          color:'black',
          borderRadius: 15,
          shadowColor:'red',
          borderColor:'black',
          borderWidth: 0.5,
          width: '80%'
        }}
        onChangeText={text => setTotal (text)}
        value={Total}
        />
      </View>


          <Button 
          type='solid'
          title={'Enviar'}
          titleStyle={{
            color:'white',
            fontSize:20,
            fontWeight:'100'
          }}
          buttonStyle={{
            borderRadius:15,
            borderColor:'orange',
            borderWidth:2,
            marginVertical:5,
            backgroundColor:'orange'
          }}
          onPress={()=> alert('Su registro se ha guardado correctamente'+id+id_producto+cantidad+Total)}
          />
      </Card>
      </View>
      <View style={{height:50}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  card:{
    borderRadius:20,
    elevation:15,
  },  
  inputs:{
    flexDirection: 'row',
    alignSelf:'center',
    marginVertical:10,
  },
  image:{
    flex:1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fondo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  input: {
    borderRadius: 25,
    width: '90%',
    height: '10%',
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'space-mono',
    borderWidth: .5,
    borderColor:'#808B96',
    marginBottom: 20,

  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: -60,
    textAlign: 'right',
    color: '#000000',
  },

  box: {
    height: box_height,
  },
  box1: {
    backgroundColor: '#FF7F00',
    width: '100%',
    height: '20%',
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40,
  },
  box2: {
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 20,
    marginTop: 20,
    alignItems: 'center',
  },

  colorBtn: {
    borderWidth: 1,
    borderColor: '#EDBB99',
    backgroundColor: '#FF7F00',
    padding: 15,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 40,
    width: '50%',
    height: '10%',
    marginTop: 30,
  },

  colorTxtBtn: {
    color: '#000000',
    fontSize: 18,
    textAlign: 'center',
  },
});


export default RankingScreen;
