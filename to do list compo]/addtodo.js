import React, { useState } from 'react';
import { StyleSheet, View ,TextInput,Button} from 'react-native';
export default function addtodo({submit}){
    const [text,Settext] = useState('');
    const changehandle = (val) => {
    Settext(val);
    }
    return (
        <View>
            <TextInput 
            style={styles.input}
            placeholder='New Todo'
            onChangeText={changehandle} />
            <Button onPress={()=>submit(text)} title='add todo' color='#42a5f5'/>
        </View>
    )
}
const styles = StyleSheet.create({
input:{
    marginTop:10,
    paddingHorizontal:8,
    paddingVertical:6,
    borderBottomWidth:1,
    borderBottomColor:'#000',
    fontSize:20,
    color:'black',
    fontWeight:'bold'
}
})
