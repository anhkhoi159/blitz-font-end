import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToolBar from '../../components/Toolbar'
import OrderItem from '../../components/profile_components/OrderItem'

export default function BuyOrderScreen(props) {
  
    return (
        <View style={styles.container}>
          <ToolBar title={'Quản lý đơn mua'}/>
          <View style={styles.listView}>
          <OrderItem />
          <OrderItem />
          <OrderItem />
          </View>
          
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container:{

    },
    listView:{
      margin:15
    }
  });