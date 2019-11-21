import React from 'react';
import { StyleSheet, Text, View, FlatList,Dimensions } from 'react-native';
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
        <View style={styles.toolBar}>
          <Text style={styles.textToolBar}>
            INVENTORY MANAGEMENT
          </Text>
        </View>
        <View style={styles.optionBar}>
          <View style={{flexDirection:'row'}}>
            <Text>Request: 26</Text>
            <Text> | </Text>
            <Text>Offer: 0</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Sort  </Text>
            <Text>Filter</Text>
          </View>
        </View>
        <FlatList
        data={TODOS}
        renderItem={(item) => <InventoryItem item={item} onPressId={onPressId}/>}
        keyExtractor={item => (item.id).toString()}
        style={{marginBottom:60}}
      />
      </View>
    );
  }

  const styles = StyleSheet.create({

    container: {
      backgroundColor: '#fff',
      alignItems:'center',
      flexDirection:'column',
      

      
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
    optionBar: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddingHorizontal:10,
      paddingVertical:5,
      borderColor:'black',
      borderWidth:1,
      borderRadius:10,
      height:50,
      width:350,
      marginTop:20,
      marginBottom:30,


    }
  });
  