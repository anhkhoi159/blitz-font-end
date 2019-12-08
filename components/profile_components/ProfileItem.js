import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function ProfileItem(props) {
    const {title,leftImage,rightImage,onPress} = props
    const onPressN = ()=>{
        onPress()
    }

    return (
        <TouchableOpacity onPress={onPressN}>
            <View style={styles.container}>
                <Image style={styles.leftIcon} source={leftImage} ></Image>
                <Text style={styles.titleText}>{title}</Text>
                {
                    rightImage==true
                    ?<Image style={styles.leftRight}  source={require('../../assets/arrow-right.png')}></Image>
                    :<View></View>
                }
            
        </View>
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    container:{
        height:50,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:15
    },titleText:{
        fontSize:14,
        color:'black',
        flex:1,
        marginLeft:15,
        fontWeight:'500',
        marginTop:5

    },
    leftIcon:{
        width:24,
        height:24
    },
    leftRight:{
        width:16,
        height:16,
        
    }
  });