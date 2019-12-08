import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  // Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Dimensions 
 } from 'react-native';
import MyDatePicker from '../../components/MyDayPicker'
import { Input } from 'react-native-elements'
import GradientButton from 'react-native-gradient-buttons';
import Image from 'react-native-scalable-image';
import Toolbar from '../../components/Toolbar'

// const DateRCMInput = props => (
//   <View style={styles.inputContainer}>
//     <View style={styles.inputAround}>
//         <Text style={styles.labelInput}>{props.title}:</Text>
//         <Text style={styles.input}/>
//         <MyDatePicker ></MyDatePicker>
//     </View>
//   </View>
// )
// const TextRCMInput = props => (
//   <View style={styles.inputContainer}>
//     <View style={styles.inputAround}>
//         <Text style={styles.labelInput}>{props.title}:</Text>
//         <TextInput 
//         style={styles.input}
//         keyboardType = {'numeric'}
//         placeholder={'5000'} 
//         placeholderTextColor="black" />
//     </View>
//   </View>
// )


export default function ProductScreen(props) {

  const { state } = props.navigation;
  const [product,setProduct] = useState(state.params.product)
  const [myDate, setMyDate] = useState(new Date());
  const MoveToTab =(()=>{
   
    props.navigation.navigate('PushProduct', { product : product });
  })

  const StartButton = props =>(
 
    <View style={{width:'100%', alignItems:'center', marginTop:15 }}>
    <GradientButton
     text="Đẩy sản phẩm" 
     height={60}
     width={screenWidth-40}
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
                <Toolbar title={"Sản Phẩm"}/>
                <View style={styles.imageView}>
                  <Image height={300}  source={{uri:product.img_src}}/>
                </View>
                <Text style={styles.titleTextItem}>{product.title}</Text>
                <Text style={styles.textPrice}>Giá bán: {product.price} VNĐ</Text>
                <Text style={styles.textQuantity}>Số lượng: {product.inventory_quantity} </Text>
               
              

          
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
      paddingBottom:50,
      
    },
    imageView:{
      alignItems:'center',
      marginTop:10
    },
  
  
    titleTextItem: {
      fontWeight:'bold',
      color:'blue',
      fontSize:18,
      marginBottom:10,
      marginTop:20,
      marginLeft:20,
      marginRight:10
    },
    textPrice:{
      fontSize:16, 
      fontWeight:'bold',
      marginLeft:20,
      marginTop:10
      
    },
    textQuantity:{
      fontSize:16, 
      marginLeft:20,
      marginTop:5
    }
    // titleFrom:{
    //   color:'red',
    //   fontSize:14,
    //   fontWeight:'bold',
    //   marginLeft:20,
    //   marginTop:30
    // },

    // //input style
    // inputContainer: {
    //   width:"100%",
    //   flexDirection:'column',
    //   alignItems:'center'
    // },
    // inputAround: {
    //   width:"96%",
    //   height:50,
    //   borderColor:'#e0e0e0',
    //   borderWidth:1.2,
    //   borderRadius:5,
    //   flexDirection:'row',
    //   alignItems:'center',
    //   justifyContent:'space-between',
    //   marginTop:5,
    //   marginBottom:5
    // },
    // labelInput: {
    //   color:'#B8B8B8',
    //   fontWeight:'bold',
    //   fontSize:15,
    //   marginLeft:15,
    //   marginRight:10
    // },
    // input: {
    //   flex:1,
    //   textAlign: 'right',
    //   marginRight:15 
    // }
  });
  