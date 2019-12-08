import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput  } from 'react-native';



export default function NumnerView(props) {
    const {title,value,setValue,vnd, height} = props
    const onPress = value =>{
        setValue(value)
    }  
  return (
    
        <View style={[styles.container,{height:height}]}>
            <Text style={styles.textContent}>{title}:</Text>
            {/* <Text style={[styles.textContent,{width:100, textAlign:'center'}]}>{value}</Text> */}
            <View style={{flexDirection:'row'}}>
            <TextInput 
            style={[styles.inputView,{textAlign:vnd?'right':'center'}]} 
            defaultValue={value} 
            onChangeText={text => onPress(text)}
            keyboardType={'numeric'}/>
            {
                vnd?<Text style={styles.textContent}> VNĐ</Text>:<Text style={styles.textContent}>  </Text>
            }
            </View> 
        </View>
   
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#0099FF',
        borderRadius:24,
        alignItems:'center',
        marginTop:20
    
      },
      textContent:{
          fontWeight:'bold',
          fontSize:14,
          color:'white'
      },
      inputView:{
        fontWeight:'bold',
        fontSize:14,
        color:'white',
        width:70,
      }
     
  });
  