import {View,ActivityIndicator, Text,FlatList ,StyleSheet, Image, ScrollView} from 'react-native';
import React, {useState, useEffect}from 'react';
import {Button, Card, SpeedDial} from 'react-native-elements';
import HeaderScreen2 from '../screens/HeaderScreen2';
import baseURL from '../../routes/api';
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const url = '/api/proveedores'
function ProveedoresScreen ({navigation}) {
    const [isLoading, setLoading] = useState(true);
    const [info, setInfo] = useState([]);

    const getProveedores = async () =>{
        try {
            const res = await fetch(baseURL+url)
            const json = await  res.json()
            setInfo(json.data)
            console.log(json.data)
        } catch (error) {
            alert(error)
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        getProveedores()
    },[])
  return (
    <ScrollView style={{flex: 1, backgroundColor:'white'}}>
      <View>
        <HeaderScreen2 />
      </View>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={info}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
              <View>
              <Card containerStyle={{...styles.card}}>
                <MaterialCommunityIcons name='truck-delivery' color={'orange'} style={{alignSelf:'center'}} size={100} />
                  <Text style={{...styles.text}}>Nombre: {item.nombre}</Text>
                  <Text style={{...styles.text}}>Empresa: {item.empresa}</Text>
                  <Text style={{...styles.text}}>Dias de visita: {item.dias_visita}</Text>
              </Card>
              </View>
            
          )}
        />
      )}
      <Button type='clear' onPress={()=>navigation.navigate('Register')} buttonStyle={{...styles.button}} icon={<Icon name='plus' size={20} color={'white'} />}/>
      <View style={{height:130}}></View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({ 
    button:{
        marginVertical: 25,
        width: 50,
        height:50,
        borderRadius: 25,
        position:'relative',
        alignSelf:'flex-end',
        backgroundColor: 'orange',
        right:10
    },
    card:{
        borderRadius: 15,
        shadowColor: 'orange',
        elevation: 10
    },
    text:{
        color:'black',
        alignSelf:'center',
        fontSize:17
    }
})
export default ProveedoresScreen;
