import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';


export default function InventoryItem(props) {
    const onPress = ()=>{
      props.onPressId(1)
    }
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.inventoryItem}>
            <Image  style={styles.imageProduct} source={require('../assets/icon.png')}/>
            <View style={styles.infoInventory}>
              <Text style={styles.titleInventory}>Title of inventory</Text>
              <Text style={styles.contentInventory}>Sold in 2 month: 500</Text>
              <Text style={styles.contentInventory}>Count: 1245600</Text>
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
      backgroundColor: 'red',
      flexDirection:'row',
      borderBottomWidth:1,
      borderBottomColor:'grey',
      paddingBottom:5
      
     
    },
    imageProduct: {
     width:100,
     height:100,
     
    },
    infoInventory: {
    flexDirection:'column',
    marginLeft:18,
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
  