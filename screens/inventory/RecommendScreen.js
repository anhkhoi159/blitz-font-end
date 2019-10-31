import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Dimensions 
 } from 'react-native';
import MyDatePicker from '../../components/MyDayPicker'
import { Input } from 'react-native-elements'
import GradientButton from 'react-native-gradient-buttons';

const DateRCMInput = props => (
  <View style={styles.inputContainer}>
    <View style={styles.inputAround}>
        <Text style={styles.labelInput}>{props.title}:</Text>
        <Text style={styles.input}/>
        <MyDatePicker ></MyDatePicker>
    </View>
  </View>
)
const TextRCMInput = props => (
  <View style={styles.inputContainer}>
    <View style={styles.inputAround}>
        <Text style={styles.labelInput}>{props.title}:</Text>
        <TextInput 
        style={styles.input}
        keyboardType = {'numeric'}
        placeholder={'5000'} 
        placeholderTextColor="black" />
    </View>
  </View>
)


export default function RecommendScreen(props) {
  const [myDate, setMyDate] = useState(new Date());

  const MoveToTab =(()=>{
    console.log('Clickkkkk')
    props.navigation.navigate('ConfirmScreen');
  })

  const StartButton = props =>(
 
    <View style={{width:'100%', alignItems:'center', marginTop:10 }}>
    <GradientButton
     text="Start" 
     height={60}
     width={'90%'}
     radius={15} 
     deepBlue 
     impact
     textStyle={{ fontSize: 20 }}
     onPressAction={MoveToTab}  />
    </View>
  
  )
    return (
      <KeyboardAvoidingView
            enabled
            behavior="padding">
        <ScrollView >

          <View style={styles.container}>
                {/* <Image  style={styles.imageProduct} source={require('../../assets/5.jpg')}/> */}
                <Image  style={styles.imageProduct} source={{uri:'https://cdn.tgdd.vn/Products/Images/42/191483/iphone-xr-128gb-red-400x400.jpg'}}/>
                <Text style={styles.titleTextItem}>Title of inventory</Text>
                <View style={styles.textInfoAround}>
                  <Text style={{fontSize:18, fontWeight:'bold',marginRight:20}}>Price: 2000.000 VND</Text>
                  <Text style={{fontSize:16, flex:1}}>Count: 200 </Text>
                </View>
                <Text style={styles.titleFrom}>Flash sale</Text>

                <TextRCMInput title='Count'/>
                <DateRCMInput title='Promo time'/>
                <DateRCMInput title='Start'/>
                <DateRCMInput title='End'/>
                <TextRCMInput title='Price'/>
                <StartButton/>
            </View>

          </ScrollView>
        </KeyboardAvoidingView>
    );
  }
  
  const screenWidth = Math.round(Dimensions.get('window').width);

  const styles = StyleSheet.create({
    //main style
    container: {         
      flexDirection:'column',
      paddingBottom:50
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

    //input style
    inputContainer: {
      width:"100%",
      flexDirection:'column',
      alignItems:'center'
    },
    inputAround: {
      width:"96%",
      height:50,
      borderColor:'#e0e0e0',
      borderWidth:1.2,
      borderRadius:5,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginTop:5,
      marginBottom:5
    },
    labelInput: {
      color:'#B8B8B8',
      fontWeight:'bold',
      fontSize:15,
      marginLeft:15,
      marginRight:10
    },
    input: {
      flex:1,
      textAlign: 'right',
      marginRight:15 
    }
  });
  