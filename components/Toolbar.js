import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Toolbar(props) {
    const { title } = props
    return (
        <View style={styles.toolBar}>
        <Text style={styles.textToolBar}>
          {title}
        </Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    toolBar:{
        backgroundColor:'#0099FF',
        width:'100%',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        height:70
      },
      textToolBar: {
        color:'white',
        fontSize:18,
        marginTop:13,
        fontWeight:'bold',
        textTransform:'uppercase'

      },
  });
  