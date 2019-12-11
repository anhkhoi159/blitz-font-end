import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';



export default function TextView(props) {
    const {title, press} = props
    const onPress = () =>{
        press()
    }  
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <Text style={styles.textContent}>{title}</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:40,
        paddingHorizontal:20,
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'#0099FF',
        borderRadius:24,
        alignItems:'center',
        marginTop:20
    
      },
      textContent:{
          fontWeight:'bold',
          fontSize:14,
          color:'white'
      }
     
  });
  