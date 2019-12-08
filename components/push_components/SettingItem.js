import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import NumberView from '../NumberView'
import TextView from '../TextView'
import StepButton from '../StepButton'

export default function SettingItem(props) {
  const { product,onPress} = props
  const [price,setPrice] = useState(product.price.toString())
  const [quantity,setQuantity] = useState(product.inventory_quantity.toString())
  const settingPress=()=>{
    onPress(1,'confirm')
  }
  return (
    <View style={styles.container}>
        <Text style={styles.textTitle}>{product.title}</Text>
        {/* <Text style={styles.textContent}>product.price VNĐ   Tồn kho: product.inventory_quantity</Text> */}
        <Text style={styles.textContent}>{product.price} VNĐ   Tồn kho: {product.inventory_quantity}</Text>
        
        <NumberView title='Giá bán' value={price} vnd={true} setValue={setPrice} height={40}/>
        <NumberView title='Số lượng bán' value={quantity} vnd={false} setValue={setQuantity} height={40}/>
        <TextView title='Thiết lập giá sỉ'/>
        <TextView title='Cách thức mua'/>
        <TextView title='Địa chỉ lấy hàng'/>
        <View style={styles.stepButton}>
          <StepButton title='Tiếp theo' onPress={settingPress} />
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
  