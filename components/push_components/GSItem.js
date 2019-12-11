import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';


export default function GSItem(props) {
   const {quantity,price} = props
    const onPress = text=>{
        console.log(text)
    }
    return (
        <View style={styles.container}>
        <Text style={styles.textView}>Mua từ</Text>
        <TextInput 
            style={styles.inputView} 
            defaultValue={quantity} 
            onChangeText={text => onPress(text)}
            keyboardType={'numeric'}/>
        <Text style={styles.textView}>Giá</Text>
        <View style={styles.priceView}>
        <TextInput 
            style={styles.priceInput} 
            defaultValue={price} 
            onChangeText={text => onPress(text)}
            keyboardType={'numeric'}/>    
        <Text style={styles.VND}> VNĐ</Text>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:15
    },
    inputView:{
        height:30,
        width:110,
        backgroundColor:'white',
        borderColor:'#cccccc',
        borderWidth:1,
        borderRadius:10,
        textAlign:'center',
        marginHorizontal:5,
        color:'black',
        fontWeight:'bold',
        fontSize:12

    },
    textView:{
        fontSize:15,
        color:'black',
        fontWeight:'bold',
        
    },
    priceView:{
        height:30,
        width:110,
        backgroundColor:'white',
        borderColor:'#cccccc',
        borderWidth:1,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:5,
    },
    VND:{
        color:'black',
        fontWeight:'bold',
        fontSize:12
    },
    priceInput:{
        textAlign:'center',
        color:'black',
        fontWeight:'bold',
        fontSize:12,
        
    }
  });