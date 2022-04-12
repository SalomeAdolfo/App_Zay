import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import React,{useState,useEffect} from 'react';
import {Card} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome'
import baseURL from '../../routes/api';
const url = '/api/ventas';

const VentasScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);

  const getVentas = async () =>{
    try{
      const res = await fetch( baseURL+url);
      const json = await res.json();
      setInfo(json.data)
      console.log(json.data)
    }catch(e){
      alert(e)
    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    getVentas();
  },[])
  return (
    <ScrollView>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={info}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
              <View>
              <Card containerStyle={{...styles.card}}>
                <MaterialCommunityIcons name='dollar' color={'orange'} style={{alignSelf:'center'}} size={100} />
                  <Text style={{...styles.text}}>Cantidad: {item.cantidad}</Text>
                  <Text style={{...styles.text}}>Total: {item.total}</Text>
              </Card>
              </View>
            
          )}
        />
      )}
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
export default VentasScreen;
