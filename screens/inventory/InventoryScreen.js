import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, FlatList,Dimensions,AsyncStorage } from 'react-native';
import InventoryItem from '../../components/InventoryItem'
import { TODOS } from '../../data/data'
import Toolbar from '../../components/Toolbar'
import SearchBar from '../../components/SearchBar'

async function asyncCall(){
 
  const token = await AsyncStorage.getItem('my_token',async (err, result) => {
    return result
  }
)


const response = await  fetch('http://blitz-api-env.ap-southeast-1.elasticbeanstalk.com/pull', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    },
    body:JSON.stringify({
    "token": token,
    }),

});
const jsonData = await response.json();
// JSON.parse(JSON.stringify(jsonData))
console.log("data "+JSON.stringify(jsonData))
 return jsonData

// var obj = { name: "John", age: 30, city: "New York" };

// var aa = JSON.stringify(obj)
// console.log(aa)
// return JSON.stringify(obj)
}


export default  function InventoryScreen(props) {
    const [data,setData] = useState();
 
  
  
    AsyncStorage.getItem('is_login', (err, result) => {
      if(result==='false'){
        props.navigation.navigate('LoginScreen');
      }
    }
  )
    const getData = async ()=>{
      const token = await AsyncStorage.getItem('my_token',async (err, result) => {
        return result
        }
      )

    const response = await  fetch('http://blitz-api-env.ap-southeast-1.elasticbeanstalk.com/pull', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          },
          body:JSON.stringify({
          "token": token,
          }),

      });
      const jsonData = await response.json();
      setData(jsonData.data)
     
  }

  useEffect(() => {
    getData();
  },);
 
    const onPressId = product=>{
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
        data={data}
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
  