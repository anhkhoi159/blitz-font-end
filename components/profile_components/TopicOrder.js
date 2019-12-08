import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';


export default function TopicOrder(props) {
    const {topic,content,topImage, onPress} = props
  
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                {/* <Image style={styles.imageTopic} source={require('../../assets/bicycle.png')}/> */}
                <Image style={styles.imageTopic} source={topImage}/>
                <Text style={styles.textTopic}>{topic}</Text>
                <Text style={styles.textContent}>{content}</Text>
            </View>
        </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    container:{
        height:160,
        width:130,
        backgroundColor:'#ECEBF2',
        borderRadius:14,
        padding:10,
        paddingRight:5,
        paddingTop:5,
        marginRight:20
        
    },
    imageTopic:{
        width:40,
        height:40
    },
    textTopic:{
        fontSize:17,
        color:'black',
        fontWeight:'bold',
        flex:1,
        marginTop:3
    },
    textContent:{
        fontSize:12,
        color:'black',
    }
  });