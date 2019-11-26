import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,Dimensions,TextInput } from 'react-native';
import { TODOS } from '../../data/data'
import InventoryItem from '../../components/InventoryItem'
import { Input } from 'react-native-elements';


export default function OfferDetail() {
 

    return (
      <View style={styles.container}> 
        <View style={styles.toolBar}>
          <Text style={styles.textToolBar}>
            CHỢ ĐẦU MỐI
          </Text>
        </View>
        <View style={styles.imageViewItem}>
            <Image style={styles.imageItem} source={{uri : 'https://assets.forwardcdn.com/images/cropped/axe-1531828722.jpg'}}></Image>
        </View>
        <Text style={styles.textTitle}>Green grape from farm</Text>
        <View style={styles.viewContent}>
            <View style={styles.countBuy}>
                <Text>Số lượng mua:</Text>
                <View style={styles.countText}>
                    <TextInput 
                    style={styles.countInput}
                    keyboardType = {'numeric'}
                    placeholder={'5000'} 
                    placeholderTextColor="black" />
                    <Text>/1000</Text>
                </View>
            </View>
        </View>
      </View>
    );
  }
  const screenWidth = Math.round(Dimensions.get('window').width);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      
      flexDirection:'column',
      marginTop:0  
    },
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
      fontWeight:'bold'
    },
    imageViewItem: {
        width:screenWidth,
        margin:6
        
    },
    imageItem:{
        width:screenWidth-12,
        height:250,
        borderRadius:5
    },
    textTitle: {
        fontWeight:'bold',
        fontSize:24,
        marginLeft:15,
        marginTop:5
    },
    viewContent: {
        margin:10,
        flexDirection:'column'
    },
    countBuy: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:50,
        backgroundColor:'#F5F5F5',
        borderRadius:5,
        paddingHorizontal:10

    },
    countText: {
        flexDirection:'row'
    },
    countInput: {
        width:50,
        textAlign: 'right',
    }
    
  });
  