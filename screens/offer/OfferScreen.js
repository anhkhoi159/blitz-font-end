import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList,Button,Alert, TouchableOpacity } from 'react-native';
import { TODOS } from '../../data/data'
import InventoryItem from '../../components/InventoryItem'


export default function OfferScreen() {
  const [offer, setOffer] = useState(true);


  const getData = async ()=>{
    const response = await fetch('http://blitz-api-env.ap-southeast-1.elasticbeanstalk.com/getdata')
    const jsonData = await response.json();
    console.log("mydata: ",JSON.parse(jsonData))

    // response.then((data)=>{
    //   console.log("my Data ",data.json())
    // })
    // console.log("my Data ",response.json())
  }
  const onPressId = id=>{
    console.log("Hello",id)
    // props.navigation.navigate('MainScreen', {}, NavigationActions.navigate({ routeName: 'RecommendScreen' }))
    props.navigation.navigate('RecommendScreen');
  }  
  const onPressTab = newOffer =>{
    if(newOffer!=offer){
      setOffer(newOffer)
    }
    // getData()
  }

    return (
      <View style={styles.container}> 
        <View style={styles.toolBar}>
          <Text style={styles.textToolBar}>
            MARKET
          </Text>
        </View>
        <View style={{width:'100%', flexDirection:'row'}}>
        <View style={styles.optionBar}>
          <View style={styles.statusBar}>
              <Text style={styles.textStatusBar}>Inventory Status</Text>
              <Text style={styles.textStatusBar}>Request: 26  |  Offer: 0</Text>
          </View>  
          <View style={{flexDirection:'row', flex:6, margin:10}}>
              <TouchableOpacity
                onPress={()=>onPressTab(true)}
                style={{flex:1}}>
                <View style={[styles.statusButton,{backgroundColor:offer ? '#0099FF' : 'white' }]}>
                  <Text style={[styles.statusButtonText,{color:offer ? 'white' : '#0099FF'}]}>
                      Offer
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={()=>onPressTab(false)}
              style={{flex:1}}>
                <View style={[styles.statusButton,{backgroundColor: offer ? 'white' : '#0099FF' }]}>
                  <Text style={[styles.statusButtonText,{color:offer ? '#0099FF' : 'white'}]}>
                      Request
                  </Text>
                </View>
              </TouchableOpacity>     
            </View>
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
      marginTop:0  
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
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      height:120,
      borderRadius:20,
      borderWidth:1,
      borderColor:'black',
      marginHorizontal:10,
      marginBottom:20,
      marginTop:20,
      

    },
    statusBar:{
      flexDirection:'row',
      justifyContent:'space-between',
      borderBottomColor:'black',
      borderBottomWidth:1,
      paddingBottom:5,
      flex:4,
      alignItems:'flex-end',
      paddingHorizontal:10,
      
      
      
    },
    textStatusBar:{
      fontSize:16
    },
    statusButton:{
      flex:1,
      borderRadius:5,
      justifyContent:'center',
      alignItems:'center'
      
    },
    statusButtonText:{
      fontSize:20,
      
    }
  });
  