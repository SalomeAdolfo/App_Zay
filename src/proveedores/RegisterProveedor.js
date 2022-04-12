import {View, StyleSheet} from 'react-native';
import React, {useState}from 'react';
import {Button, Card} from 'react-native-elements';
import {Hoshi} from 'react-native-textinput-effects';
import baseURL from '../../routes/api';

const url = '/api/proveedores'

function RegisterProveedor({navigation}) {
    const [name, setName] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [dias, setDias] = useState('');

    const register = async (nombreEm,nombreempresa,diasV)=>{
        try {
            const res = await fetch(baseURL+url,
                {
                    method: 'POST',
                    headers:{
                        Accept: 'application/json',
                        'Content-Type' : 'application/json',
                    },
                    body:JSON.stringify({
                       nombre:nombreEm,empresa:nombreempresa, dias_visita:diasV, 
                    }),
                },
                ).then(response => 
                    {
                        if(response.status == 200){
                            alert('Proveedor agregado')
                        }else{
                            alert('Algo salió mal')
                        }
                    });
        } catch (error) {
            console.log(error)
        }
    };
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Card containerStyle={{...styles.cards}}>
          <Card.Title style={{fontSize: 25}}>Registrar proveedor</Card.Title>
        <Hoshi
          label="Nombre del repartidor"
          borderColor="orange"
          inputPadding={16}
          onChangeText={text => setName(text)}
          value={name}
        />
        <Hoshi
          label="Empresa"
          borderColor="orange"
          inputPadding={16}
          onChangeText={text => setEmpresa(text)}
          value={empresa}
        />
        <Hoshi
          label="Dias de visita"
          borderColor="orange"
          inputPadding={16}
          onChangeText={text => setDias(text)}
          value={dias}
        />

        <Button type='outline' titleStyle={{color:'black', fontSize: 20}} title={'Submit'} buttonStyle={{...styles.button}} onPress={()=>register(name,empresa,dias)}/>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
    button:{
        marginVertical: 10,
        borderRadius: 10,
        borderColor: 'orange',
        borderWidth:1,
        width: '80%',
        alignSelf:'center'
    },  
    cards:{
        borderRadius: 15,
        elevation: 5,
        shadowColor:'orange'
    }
})
export default RegisterProveedor;
