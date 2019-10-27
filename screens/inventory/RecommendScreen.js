import React from 'react';
import { StyleSheet, Text, View,Image,TextInput } from 'react-native';
import MyDatePicker from '../../components/MyDayPicker'

export default function RecommendScreen(props) {
  // const { id } =props.navigation.state.params.inventoryId
  // console.log("Recommend Id: ",id)
    return (
      <View style={styles.container}>
            <View style={styles.containerProduct}>
              <Image  style={styles.imageProduct} source={require('../../assets/icon.png')}/>
              <View style={styles.infoItem}>
                <Text style={styles.titleTextItem}>Title of inventory</Text>
                <View style={styles.dateContainer}>
                  <Text style={{fontSize:16}}>Amout: </Text>
                  <TextInput keyboardType={'numeric'} textAlign={'center'} style={styles.inputPromoTime} />
                </View>
                <View style={styles.dateContainer}>
                  <Text style={{fontSize:16}}>Promo date: </Text>
                  <TextInput maxLength={2} textAlign={'center'} keyboardType={'numeric'} style={styles.inputPromoTime} />
                  <Text style={{fontSize:16,}}>day</Text>
                </View>
                
              </View>
            </View>
            <View style={styles.dateContainer}>
                  <Text style={styles.contentTextItem}>Start date: </Text>
                  <MyDatePicker/>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.contentTextItem}>End date: </Text>
              <MyDatePicker/>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.contentTextItem}>Price: </Text>
              <TextInput
                maxLength={9} 
                textAlign={'center'} 
                keyboardType={'numeric'} 
                style={[styles.input,{width:100}]}
                underlineColorAndroid = "transparent"
                placeholder = "VND" />
              {/* <Text style={styles.contentTextItem}>VND</Text> */}
            </View> 
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {         
      flexDirection:'column',
      marginTop:15,
      // backgroundColor:'#f1f1f1'
    },
    containerProduct: {
      width: '100%',
      minHeight: 50,     
      flexDirection:'row',
      paddingBottom:5
      
     
    },
    imageProduct: {
     width:100,
     height:100,
     marginLeft:15
     
    },
    infoItem: {
    flexDirection:'column',
    marginLeft:18,
    justifyContent:'center',
    marginBottom:10

    },
    titleTextItem: {
      fontWeight:'bold',
      color:'blue',
      fontSize:22,
      textTransform: 'uppercase',
      marginBottom:10
    },
    contentTextItem: {
      fontSize:16,
      width:80,
      marginLeft:15
    },
    dateContainer: {
      flexDirection:'row',
      alignItems:'center',
      margin:5,
      borderColor:'grey',
      borderBottomWidth:1,
      paddingBottom:1,
    },
    inputPromoTime: {
     
      width:30,
      marginLeft:5,

     
    },
    input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
  });
  