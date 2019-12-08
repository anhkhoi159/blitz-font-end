import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import StepButton from '../StepButton'


export default function ConfirmItem(props) {
  const { product,onPress} = props
  const confirmPress=()=>{
    onPress(2,'done')
  }
  return (
    <View style={styles.container}>

        <Text style={styles.textTitle}>{product.title}</Text>

        <View style={styles.viewContent}>
          <View style={styles.numberView}>
            <Text style={styles.titleContent}>Giá bán:</Text>
            <Text style={styles.valueContent}>45000 VNĐ</Text>
          </View>
          <View style={styles.numberView}>
            <Text style={styles.titleContent}>Số lượng bán:</Text>
            <Text style={styles.valueContent}>56</Text>
          </View>
          <View> 
            <Text style={styles.titleContent}>Giá sỉ:</Text>
            <View style={styles.soPriceView}>
              <Text style={styles.valueContent}>Mua từ: 20</Text>
              <Text style={styles.valueContent}>Giá: 44000 VNĐ</Text>
            </View>
            <View style={styles.soPriceView}>
              <Text style={styles.valueContent}>Mua từ: 50</Text>
              <Text style={styles.valueContent}>Giá: 40000 VNĐ</Text>
            </View>
            <View>
              <Text style={styles.titleContent}>Cách thức mua:</Text>
              <Text style={[styles.valueContent,{marginLeft:30}]}>Mua nhanh</Text>
              <Text style={[styles.valueContent,{marginLeft:30}]}>Thương lượng</Text>
            </View>
            <View>
              <Text style={styles.titleContent}>Địa chỉ:</Text>
              <Text style={styles.valueLocation}>12 Tôn Đản, Phường 13 Quận 4, TP HCM</Text>
            </View>
          </View>
        </View>
        <View style={styles.stepButton}>
          <StepButton title='Xác nhận và bán' onPress={confirmPress}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flexDirection:'column',
      marginTop:15,
      marginHorizontal:15,
        
    },
    textTitle:{
        fontSize:26,
        fontWeight:'bold',
        color:'black',
        marginTop:15,
        marginBottom:5,
        marginLeft:5
    },
    viewContent:{
      backgroundColor:'#ECEBF2',
      borderRadius:25,
      alignItems:'stretch',
      padding:15,
      paddingBottom:30
    },
    numberView:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    titleContent:{
      color:'#27262D',
      fontSize:25
    },
    valueContent:{
      color:'#89898f',
      fontSize:20
    },
    soPriceView:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginHorizontal:30
    },
    valueLocation:{
      color:'#89898f',
      fontSize:20,
      marginLeft:30,
      maxWidth:220,
      
    },
    stepButton:{
      flex:1,
      alignItems:'center' ,
      marginTop:30,
    
    }  
  });
  