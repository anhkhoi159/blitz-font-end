import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';


export default function InventoryItem(props) {
    const item  = props.item
    
    console.log("inventory ",item.item.name)
    const onPress = ()=>{
      props.onPressId(item.item.id)
    }
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.inventoryItem}>
            <View style={styles.boderItem}>
            <Image  style={styles.imageProduct} source={{uri : item.item.uri}}/>
            </View>
            <View style={styles.infoInventory}>
              <Text style={styles.titleInventory}>{item.item.name}</Text>
              <Text style={styles.contentInventory}>Sold in 2 month: {item.item.soldin2Month}</Text>
              <Text style={styles.contentInventory}>Count: {item.item.count}</Text>
            </View>
        </View>
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    inventoryItem: {
      margin: 5,
      width: '95%',
      minHeight: 50,
      // backgroundColor: 'red',
      flexDirection:'row',
      borderBottomWidth:1,
      borderBottomColor:'grey',
      paddingBottom:5,
      
      
     
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
    marginLeft:30,
    justifyContent:'center',
    marginBottom:10

    },
    titleInventory: {
      fontWeight:'bold',
      color:'blue',
      fontSize:22,
      textTransform: 'uppercase',
      marginBottom:10
    },
    contentInventory: {
      fontSize:14,
    },
    // imageProduct: {
     
    // }
  });
  