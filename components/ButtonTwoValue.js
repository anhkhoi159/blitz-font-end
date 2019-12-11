import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ButtonTwoValue(props) {
    const {title,value,press} = props
    const onPress = ()=>{
        if(press()!=undefined){
            press()
        }
    }
    return (
      <View>
        {
          value!=""
          ?<TouchableOpacity onPress={onPress}>
            <View style={styles.numberView}>
              <Text style={styles.titleContent}>{title}</Text>
              <Text style={styles.valueContent}>{value}</Text>
            </View>
          </TouchableOpacity>
          :<TouchableOpacity onPress={onPress}>
              <View style={[styles.numberView,{justifyContent:'center'}]}>
                <Text style={styles.titleContent}>{title}</Text>
              </View>
            </TouchableOpacity>
        }
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
        fontSize:14,
        color:'white',
      },
  });
  