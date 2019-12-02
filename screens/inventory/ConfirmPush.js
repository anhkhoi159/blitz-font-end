import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Dimensions,
  Image,
  ScrollView
 } from 'react-native';
 import GradientButton from 'react-native-gradient-buttons';


 const CancelButton = props =>(
 <GradientButton
    style={{ flex:1 }}
    text="Cancel"
    textStyle={{ fontSize: 20 }}
    gradientBegin="#ed3423"
    gradientEnd="#ed3423"
    gradientDirection=""
    height={60}
    width={'100%'}
    radius={0}
    impact
    impactStyle='Cancel'
    onPressAction={() =>  props.onPressMove() }
  />
)
const OKButton = props =>(
  <GradientButton
     style={{ flex:1 }}
     text="OK"
     textStyle={{ fontSize: 20 }}
     gradientBegin="#6ac360"
     gradientEnd="#6ac360"
     gradientDirection="diagonal"
     height={60}
     width={'100%'}
     radius={0}
     impact
     impactStyle='OK'
     onPressAction={
       () => 
         
         props.onPressMove()
        
      }
   />
 )

export default function ConfirmPush(props) {

  const okPress =(()=>{
    alert('Push flash sale successful !')
    props.navigation.navigate('InventoryScreen');
  })
  const cancelPress =(()=>{
    props.navigation.navigate('PushScreen');
  })

    return (
      <ScrollView>
      <View style={styles.container}>
        <Image  style={styles.imageProduct} source={{uri:'https://cdn.tgdd.vn/Products/Images/42/191483/iphone-xr-128gb-red-400x400.jpg'}}/>
        <Text style={styles.titleTextItem}>Title of inventory</Text>
        <View style={styles.textInfoAround}>
          <Text style={{fontSize:18, fontWeight:'bold',marginRight:20}}>Price: 2000.000 VND</Text>
          <Text style={{fontSize:16, flex:1}}>Count: 200 </Text>
        </View>
        <Text style={styles.titleFrom}>Flash sale</Text>
        <Text style={styles.textInfoConfirm}>Count: 150</Text>
        <Text style={styles.textInfoConfirm}>Promo time: 28/10/2019 18:00</Text>
        <Text style={styles.textInfoConfirm}>Start time: 30/10/2019 18:00</Text>
        <Text style={styles.textInfoConfirm}>End time: 01/11/2019 23:59</Text>
        <Text style={styles.textInfoConfirm}>Price: 1600.000 VND</Text>
        <View style={styles.buttonCofirm}>
            <CancelButton onPressMove={cancelPress}/>
            <OKButton onPressMove={okPress}/>
        </View>
      </View>
      </ScrollView>
    );
  }
  const screenWidth = Math.round(Dimensions.get('window').width);
  const styles = StyleSheet.create({
    //main style
    container: {         
      flexDirection:'column',
      paddingBottom:50,
      marginTop:20
    },
  
    imageProduct: {
     width:"100%",
     height:screenWidth,
    },
  
    titleTextItem: {
      fontWeight:'bold',
      color:'blue',
      fontSize:26,
      textTransform: 'uppercase',
      marginBottom:10,
      marginTop:20,
      marginLeft:10
    },
    textInfoAround:{
      flexDirection:'row', 
      justifyContent:'space-between', 
      alignItems:'center', 
      width:'100%',
      marginLeft:15
    },
    titleFrom:{
      color:'red',
      fontSize:18,
      fontWeight:'bold',
      marginLeft:10,
      marginTop:30
    },
    textInfoConfirm: {
      fontSize:16,
      marginTop:10,
      marginLeft:15
    },
    buttonCofirm: {
      flexDirection:'row',
      marginHorizontal:5,
      marginVertical:20
    }
  });
  