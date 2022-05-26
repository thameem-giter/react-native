import React from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { StyleSheet, Text, View ,TouchableOpacity, TouchableOpacityBase, Keyboard, Alert} from 'react-native';
export default function todolist({item,presshandle}){
    return (
        <TouchableOpacity onPress={()=>[presshandle(item.key)]}onLongPress={()=> Alert.alert('','No use of long pressing this 🤣 ')}>
            <Text style ={styles.item}>
                {item.text}
            </Text>
            <View style={{padding:16,position:'absolute',top:25,left:260}}>
            <AntDesign name="delete" size={24} color="black"  />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
item : {
    padding:60,
    marginTop:30,
    borderColor:'#bbb',
    borderWidth:2,
    borderStyle:'dashed',
    borderRadius:10,
    textAlign:'center',
    fontWeight:'bold',
    fontSize:15,
    color:'black'
}
})
