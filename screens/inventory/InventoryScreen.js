import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import InventoryItem from '../../components/InventoryItem'
import { TODOS } from '../../data/data'
import { NavigationActions } from 'react-navigation';

export default function InventoryScreen(props) {
    // console.log("todo",TODOS)

    const onPressId = id=>{
      console.log("Hello",id)
      // props.navigation.navigate('MainScreen', {}, NavigationActions.navigate({ routeName: 'RecommendScreen' }))
      props.navigation.navigate('RecommendScreen');
   
    }
    return (
      <View style={styles.container}>
        {/* <InventoryItem onPressId={onPressId}/>
        <InventoryItem onPressId={onPressId}/>
        <InventoryItem onPressId={onPressId}/>
        <InventoryItem onPressId={onPressId}/> */}
        <FlatList
        data={TODOS}
        renderItem={(item) => <InventoryItem item={item} onPressId={onPressId}/>}
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
      flexDirection:'column',
      marginTop:25
      
    },
  });
  