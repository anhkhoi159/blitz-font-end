import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';



export default function StepButton(props) {
    const {title,onPress} = props
    const stepPress = () =>{
        onPress()
    }  
  return (
    <TouchableOpacity onPress={stepPress}>
        <View style={styles.container}>
            <Text style={styles.textContent}>{title}</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        width:180,
        height:55,
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
  