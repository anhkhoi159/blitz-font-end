import React from 'react';
import { StyleSheet, Text, View,Image,TextInput } from 'react-native';
import MyDatePicker from '../../components/MyDayPicker'

export default function RecommendScreen(props) {
  // const { id } =props.navigation.state.params.inventoryId
  // console.log("Recommend Id: ",id)
    return (
      <View style={styles.container}>
            <Image  style={styles.imageProduct} source={require('../../assets/icon.png')}/>
            <View style={styles.infoItem}>
              <Text style={styles.titleTextItem}>Title of inventory</Text>
              <View style={styles.dateContainer}>
                <Text style={styles.contentTextItem}>Promo date:</Text>
                <TextInput style={styles.inputPromoTime} />
                <Text style={styles.contentTextItem}>day</Text>
              </View>
              <View style={styles.dateContainer}>
                <Text style={styles.contentTextItem}>Start date:</Text>
                <MyDatePicker/>
              </View>
              <View style={styles.dateContainer}>
                <Text style={styles.contentTextItem}>End date:</Text>
                <MyDatePicker/>
              </View>  
            </View>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      minHeight: 50,
     
      flexDirection:'row',
      paddingBottom:5
      
     
    },
    imageProduct: {
     width:100,
     height:100,
     
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
    },
    dateContainer: {
      flexDirection:'row',
    },
    inputPromoTime: {
      borderColor:'grey',
      borderWidth:1,
      width:20,
      marginLeft:5,
      marginRight:5
    }
  });
  