import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';


export default function OrderItem(props) {
   
    return (
        <View style={styles.container}>
            <View style={styles.rowStyle}>
                <Image style={styles.avatarImage} source={require('../../assets/hrv.png')} />
                <Text style={styles.text15Black}>Coder school</Text>
                <Text style={[styles.text15Black,{flex:1}]}>Đang lấy hàng</Text>
            </View>
            <View style={[styles.rowStyle,{marginTop:5,borderBottomWidth:1,borderBottomColor:'black',paddingBottom:10,marginBottom:7}]}>
                <Image style={styles.productImage} source={require('../../assets/hrv.png')} />
                <View style={{flex:1}}>
                    <Text style={[styles.text15Black,{textAlign:'left',marginTop:5, marginLeft:5}]}>Dưa gang</Text>
                    <Text style={styles.text10Black}>x19</Text>
                    <Text style={styles.text10Black}>44.000 VNĐ</Text>
                </View>
            </View>
            <View style={styles.rowStyle}>
                <Text style={[styles.text10Black,{fontWeight:'bold'}]}>Tổng thanh toán</Text>
                <Text style={[styles.text10Black,{flex:1}]}>836.000 VNĐ</Text>
            </View>
            <View style={[styles.rowStyle,{marginTop:5}]}>
                <Text style={[styles.text10Black,{flex:1}]}>19:19 1-12-2019</Text>
            </View>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container:{
        height:150,
        borderRadius:24,
        backgroundColor:'#ECEBF2',
        paddingHorizontal:13,
        paddingVertical:5,
        marginBottom:20
    },
    rowStyle:{
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    text15Black:{
        fontSize:16,
        color:'black',
        textAlign:'right'
        
    },
    avatarImage:{
        height:18,
        width:18,
        borderRadius:9,
        marginHorizontal:5
    },
    productImage:{
        width:120,
        height:60,
        borderRadius:13
    },
    quantityView:{
        flex:1,
        justifyContent:'flex-end'
    },
    text10Black:{
        fontSize:12,
        color:'black',
        textAlign:'right'
        
    },
    textTotal:{
        
    }
  });