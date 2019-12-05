import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import NumnerView from '../NumberView'
import TextView from '../TextView'
import StepButton from '../StepButton'

export default function SettingItem(props) {
    // const { product,onPress} = props
  const [price,setPrice] = useState('45000')
  const [quantity,setQuantity] = useState('56')
  return (
    <View style={styles.container}>
        <Text style={styles.textTitle}>Dưa gang</Text>
        {/* <Text style={styles.textContent}>product.price VNĐ   Tồn kho: product.inventory_quantity</Text> */}
        <Text style={styles.textContent}>50.000 VNĐ   Tồn kho:56</Text>
        
        <NumnerView title='Giá bán' value={price} vnd={true} setValue={setPrice}/>
        <NumnerView title='Số lượng bán' value={quantity} vnd={false} setValue={setQuantity}/>
        <TextView title='Thiết lập giá sỉ'/>
        <TextView title='Cách thức mua'/>
        <TextView title='Địa chỉ lấy hàng'/>
        <View style={styles.stepButton}>
          <StepButton title='Tiếp theo'/>
        </View>
    </View>
  
    
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        marginTop:15,
        marginHorizontal:15
    },
    textTitle:{
        fontSize:26,
        fontWeight:'bold',
        color:'black',
        marginTop:15
    },
    textContent:{
        fontSize:22,
        fontWeight:'bold',
        color:'black',
        marginTop:10
    },
    stepButton:{
      flex:1,
      alignItems:'center' ,
      marginTop:70,
    
    }  
     
  });
  