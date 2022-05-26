import React, { useState } from 'react';
import {TextInput,ImageBackground, StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingViewBase, KeyboardAvoidingView } from 'react-native';
export default function App(){
const [name,Setname] = useState('')
const [email,Setmail] = useState('')
  return (
    <KeyboardAvoidingView style={styles.key}>
    <View style={styles.container}>
    <ImageBackground source={{uri:"https://i1.wp.com/www.deteched.com/wp-content/uploads/2017/07/276517-digital_art-portrait_display-CGI-white_background-low_poly-3D-geometry-minimalism-black.png?resize=1023.75%2C1822"}}
    style={{width:400,height:1000}}/>
   
    <TextInput style={styles.input} //name
    placeholder="e.g.thameem"
    onChangeText={(val)=>Setname(val)}
    value={Text}/>
    <TextInput style={styles.input2} //mail,phone
    placeholder="e.g.thaxxxxxx@gmail.com"
    onChangeText={(val)=>Setmail(val)}
    value={Text}/>
    <Text style={{position:'absolute',fontWeight:'bold',top:131,left:65}}>Name</Text> 
    <Text style={{position:'absolute',fontWeight:'bold',top:240,left:65}}>Email/Phone</Text>
    <TouchableOpacity style={{position:'absolute',backgroundColor:'white',width:150,height:60,borderColor:'black',borderWidth:4,borderRadius:25,right:20}}>
    <Text style={{position:'absolute',fontSize:20,fontWeight:'bold',top:10,left:30}}>Register</Text></TouchableOpacity>
    <TouchableOpacity 
    style={{position:'absolute',backgroundColor:'white',width:150,height:60,borderColor:'black',borderWidth:4,borderRadius:25}}>
    <Text style={{position:'absolute',fontSize:20,fontWeight:'bold',top:10,left:40}}>Login</Text>
    </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    alignItems: 'center',
    justifyContent: 'center',
  },
  key: {
    flex: 1
  },
//name
  input:{height:60,
  width:300,
  borderWidth:3,
  position:'absolute',
  borderRadius:25,
  top:150,
  color:'black',
  fontWeight:'bold',
  fontSize:20,
textAlign:'center'},
//email
input2:{height:60,
  width:300,
  borderWidth:3,
  position:'absolute',
  borderRadius:25,
  top:260,
  color:'black',
  fontWeight:'bold',
  fontSize:20,
textAlign:'center'},
});
