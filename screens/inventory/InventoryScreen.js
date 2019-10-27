import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import InventoryItem from '../../components/InventoryItem'
import { TODOS } from '../../data/data'
export default function InventoryScreen(props) {
    console.log("todo",TODOS)
    const onPressId = id=>{
      console.log("Hello",id)
      props.navigation.navigate('RecommendScreen', {
        inventoryId: id
      });
    }
    return (
      <View style={styles.container}>
        {/* <InventoryItem onPressId={onPressId}/>
        <InventoryItem onPressId={onPressId}/>
        <InventoryItem onPressId={onPressId}/>
        <InventoryItem onPressId={onPressId}/> */}
        <FlatList
        data={TODOS}
        renderItem={(item) => <InventoryItem item={item} />}
        keyExtractor={item => item.id}
        style={{width:'95%'}}
      />
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
  