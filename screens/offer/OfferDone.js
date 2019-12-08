import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DoneItem from '../../components/push_components/DoneItem'
import Toolbar from '../../components/Toolbar'

export default function OfferDone(props) {
  const quickBuy = 'Đơn mua đã được gửi tới người bán'
  const treatBuy = 'Thương lượng đã được gửi tới người bán'
  // const DonePress = ()=>{
  //   console.log("doneeee")
  //   // props.navigation.navigate('OfferScreen');
  // }
  const DonePress = ()=>{
    props.navigation.navigate('OfferScreen');
  }
    return (
        <View style={styles.container}>
        <Toolbar title={'Chốt đơn'}/>
        <DoneItem donePress={DonePress} mess={quickBuy} target='Gợi ý hàng' onPressTitle='Quay về chợ'/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container:{

    }
  });
  