import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions   } from 'react-native';


export default function InventoryItem(props) {
    const { item } = props.item
    const onPress = ()=>{
      props.onPressId(item)
    }
    return (
      <TouchableOpacity
        style={{width:screenWidth,}}
       onPress={onPress}
       >
        <View style={styles.inventoryItem}>
            <View style={styles.boderItem}>
            <Image  style={styles.imageProduct} source={{uri : item.img_src}}/>
            </View>
            <View style={styles.infoInventory}>
              <Text style={styles.titleInventory}>{item.title}</Text>
              <Text style={styles.priceInventory}>Giá bán: {item.price} VNĐ</Text>
            </View>
            <View style={styles.infoQuantityInventory}>
              <Text style={styles.quantityInventory}>Số lượng</Text>
              <Text style={styles.quantityInventory}>{item.inventory_quantity}</Text>
            </View>
            
        </View>
      </TouchableOpacity>
    );
  }
  const screenWidth = Math.round(Dimensions.get('window').width);

  const styles = StyleSheet.create({
    inventoryItem: {
      margin: 5,
      
      minHeight: 50,
      // backgroundColor: 'red',
      flexDirection:'row',
      borderBottomWidth:1,
      borderBottomColor:'grey',
      paddingBottom:5,
      justifyContent:'space-between'
      
     
    },
    imageProduct: {
     width:100,
     height:100,
     
     
    },
    boderItem: {
      width:100,
      height:100,
      borderBottomLeftRadius: 7,
      borderBottomRightRadius: 0,
      borderTopLeftRadius: 7,
      borderTopRightRadius:0,
      overflow: 'hidden',
      
     },
    infoInventory: {
    flexDirection:'column',
    marginLeft:20,
    justifyContent:'center',
    marginBottom:10
    },
    infoQuantityInventory: {
      flexDirection:'column',
      marginLeft:20,
      justifyContent:'center',
      marginBottom:10,
      alignItems:'center'
    },
    titleInventory: {
      // fontWeight:'bold',
      color:'black',
      fontSize:12,
      textTransform: 'uppercase',
      marginBottom:5,
      maxWidth:200
    },
    priceInventory: {
      fontWeight:'bold',
      fontSize:16,
    },
    quantityInventory: {
      fontWeight:'bold',
      fontSize:14,
      color:'#3366FF'
    },
    // imageProduct: {
     
    // }
  });
  