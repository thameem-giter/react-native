import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
export default function head(){
    return(
        <View style={styles.head}>
            <Text style={styles.title}>
             Bucket List 
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
head:{height:80,
    paddingTop:45,
    marginTop:-15,
    alignItems:'center',
    backgroundColor:'#42a5f5'
},
title :{ 
    fontSize:20,fontWeight:'bold',color:'white'
}
})