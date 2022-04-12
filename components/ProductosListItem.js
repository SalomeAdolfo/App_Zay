import * as React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from 'react-native-vector-icons'

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        paddingVertical: 15,
        paddingLeft: 15,
        borderBottomWidth: 8,
        borderBottomColor:'#E0E0E0',
        alignContent:'center',
        alignItems:'center',

    },
    image:{
        width:60,
        height:60,
        resizeMode:'cover',
        borderRadius:5,
        
    },
    icon:{
        color:'#000',
        marginLeft: 'auto',
        alignContent:'center',
    },
    text:{
        fontSize:18,
        textAlignVertical:'center',
        fontStyle:'italic',
        fontWeight:'bold',
    },
});

export default function CategoriasListItem({categoria, onPress}) {
    return(
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <Image source={{uri:categoria.cover}} style={styles.image}/>
            <Text style={styles.text}>{categoria.title}</Text>
            <Ionicons name="caret-forward-sharp" style={styles.icon}/>
        </View>
        </TouchableOpacity>
    );
}