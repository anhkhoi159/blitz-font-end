import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function ResultTwoValue(props) {
    const {title,address,phone} = props

    return (
      <View>
        <View style={styles.numberView}>
            <Text style={styles.titleContent}>{title}</Text>
            <View>
                <Text style={styles.valueContent}>{address}</Text>
                <Text style={styles.valueContent}>{phone}</Text>
            </View>
            
        </View>
      </View>
        
    );
  }
  
  const styles = StyleSheet.create({
    numberView:{
      height:40,
      paddingHorizontal:20,
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:'#0099FF',
      borderRadius:24,
      alignItems:'center',
      marginTop:15
      },
      titleContent:{
        fontWeight:'bold',
        fontSize:14,
        color:'white'
      },
      valueContent:{
        fontWeight:'bold',
        fontSize:12,
        color:'white',
        textAlign:'right'
      },
  });
  