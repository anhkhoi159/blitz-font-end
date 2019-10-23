import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InventoryItem from '../../components/InventoryItem'

export default function InventoryScreen(props) {

    const onPressId = id=>{
      console.log("Hello",id)
      props.navigation.navigate('RecommendScreen', {
        inventoryId: id
      });
    }
    return (
      <View style={styles.container}>
        <InventoryItem onPressId={onPressId}/>
        <InventoryItem onPressId={onPressId}/>
        <InventoryItem onPressId={onPressId}/>
        <InventoryItem onPressId={onPressId}/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems:'center',
      flexDirection:'column'
      
    },
  });
  