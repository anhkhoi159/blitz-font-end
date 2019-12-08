import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ResultTwoValue from '../../components/ResultTwoValue'
import Toolbar from '../../components/Toolbar'
import StepButton from '../../components/StepButton'


export default function OfferConfirm(props) {
    const { state } = props.navigation;
    const [order,setOrder] = useState(state.params.order)
    const [product,setProduct] = useState(order.product)
    // const [buyWay,setBuyWay] = useState(order.buyway==true?'Mua nhanh':'Thương lượng')
    const total = parseInt(order.quantity) * parseInt(order.price)
    const onPress = ()=>{
        props.navigation.navigate('OfferDone')
    }
   
    return (
        <View style={{flex:1, flexDirection:'column'}}>
            <Toolbar title={'Chốt đơn'}/>
            <View style={styles.container}>
                <Text style={styles.textTitle}>{product.title}</Text>
                <Text style={styles.priceText}>{product.price} VNĐ</Text>
                <ResultTwoValue title='Giá mua' value={order.price+' VNĐ'}/>
                <ResultTwoValue title='Số lượng mua' value={order.quantity}/>
                <ResultTwoValue title='Cách thức mua' value={order.buyway==true?'Mua nhanh':'Thương lượng'}/>
                <ResultTwoValue title='Địa chỉ nhận' value=''/>
                
            </View>
            <View style={styles.bottomView}>
                <View style={styles.totalPrice}>
                    <Text style={[styles.textTotalPrice,{flex:1}]}>Tổng đơn</Text>
                    <Text style={styles.textTotalPrice}>{total} VNĐ</Text>
                </View>
                <View style={styles.stepButton}>
                    <StepButton title='Xác nhận và Mua' onPress={onPress}/>
                </View>
            </View>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container:{
        paddingHorizontal:15,
        
    },
    textTitle: {
        fontWeight:'bold',
        fontSize:26,
        marginTop:5,
        marginLeft:5
    },
    priceText:{
        fontWeight:'bold',
        fontSize:22,
        marginLeft:5,
        marginTop:10
    },
    bottomView:{
        flexDirection:'column',
        justifyContent:'flex-end',
        flex:1,
        paddingBottom:10
    },
    totalPrice:{
        flexDirection:'row',
        borderTopWidth:1,
        borderTopColor:'black',
        marginHorizontal:15,
        paddingTop:10

    },
    textTotalPrice:{
        color:'black',
        fontSize:20,
        fontWeight:'bold',
    },
    stepButton:{
        
        alignItems:'center',
    }

  });
  