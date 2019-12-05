import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Image from 'react-native-scalable-image'


export default function RecommendItem(props) {
  return (
    <View style={styles.container}>
        <View style={styles.imageView}>
            {/* <View style={styles.imageView}></View> */}
            {/* <Image style={styles.imageView} source={require('../assets/5.jpg')}/> */}
            {/* <Image style={styles.imageView} source={{uri:'https://product.hstatic.net/200000013790/product/440d5d817af0d36980a4fb0c27464454_52263098d67044388d51e2d69f949461_75ad23ac6d5846249b1c7670c99a373b.jpg'}}/> */}
            <Image height={75} width={125} source={{uri:'https://product.hstatic.net/200000013790/product/440d5d817af0d36980a4fb0c27464454_52263098d67044388d51e2d69f949461_75ad23ac6d5846249b1c7670c99a373b.jpg'}}/>
        </View>
        <Text style={[styles.textContent,{marginTop:5}]}>Dưa hấu</Text>
        <View style={styles.numberView}>
            <Text style={styles.textContent}>Cần:</Text>
            <Text style={styles.textContent}>45+</Text>
        </View>
        <View style={styles.numberView}>
            <Text style={styles.textContent}>Giá mua:</Text>
            <Text style={styles.textContent}>{'<'}45.000 VNĐ</Text>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity>
            <View style={styles.buttonBG}>
              <Text style={styles.textButton}>Liên hệ</Text>
            </View>
          </TouchableOpacity>
          <Text style={[styles.textContent,{fontSize:10,textAlign:'right'}]}>Quận 12, TPHCM</Text>
        </View>

        
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#ECEBF2',
    borderRadius:25,
    paddingHorizontal:10,
    paddingVertical:10,
    marginLeft:15,
    maxWidth:200,
    
    
  },
  imageView:{
      borderRadius:20,
      width:125,
      height:75,
      alignItems:'center',
      // backgroundColor:'#0099FF',
      marginHorizontal:10
  },
  textContent:{
      fontSize:12,
      color:'#27262D',
      fontWeight:'bold',
      textAlign:'center'
  },
  numberView:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
  },
  buttonView:{
    flexDirection:'column',
    alignItems:'center'
  },
  buttonBG:{
    height:30,
    width:70,
    backgroundColor:'#0099FF',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:22,
    marginVertical:10
  },
  textButton:{
    color:'white',
    fontSize:10,
    fontWeight:'bold'
  }
  
});
  