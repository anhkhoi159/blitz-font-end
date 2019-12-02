import React from 'react';
import { StyleSheet, Text, View, FlatList,Dimensions } from 'react-native';
import InventoryItem from '../../components/InventoryItem'
import { TODOS } from '../../data/data'
import Toolbar from '../../components/Toolbar'
import SearchBar from '../../components/SearchBar'
export default function InventoryScreen(props) {
    // console.log("todo",TODOS)

    const onPressId = product=>{
      console.log("Hello",product.id)
      // props.navigation.navigate('MainScreen', {}, NavigationActions.navigate({ routeName: 'RecommendScreen' }))
      props.navigation.navigate('ProductScreen', { product : product });
   
    }
    return (
      <View style={styles.container}>
        <Toolbar title={"Quản lý tồn kho"}/>
        <SearchBar/>
        {/* <View style={styles.optionBar}>
          <View style={{flexDirection:'row'}}>
            <Text>Request: 26</Text>
            <Text> | </Text>
            <Text>Offer: 0</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Sort  </Text>
            <Text>Filter</Text>
          </View>
        </View> */}
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
  