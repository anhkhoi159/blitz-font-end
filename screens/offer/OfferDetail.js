import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,TextInput, KeyboardAvoidingView,ScrollView } from 'react-native';
import { TODOS } from '../../data/data'
import InventoryItem from '../../components/InventoryItem'
import { Input } from 'react-native-elements';
import { CheckBox } from 'react-native-elements'
import NumberView from '../../components/NumberView'
import StepButton from '../../components/StepButton'
import Toolbar from '../../components/Toolbar'
import Image from 'react-native-scalable-image';

export default function OfferDetail(props) {
  const { state } = props.navigation;
  const [product,setProduct] = useState(state.params.product)
  const [checked, setChecked] = useState(true);
  const [quantity,setQuantity] = useState(product.inventory_quantity.toString())
  const [priceBuy,setPriceBuy] = useState(product.price.toString())
  const onPress = ()=>{
    let newOrder = {
      quantity:quantity,
      price:priceBuy,
      buyway:checked,
      product:product
    }
    props.navigation.navigate('OfferConfirm', { order : newOrder });
   
  }
    return (
      <KeyboardAvoidingView
            enabled
            behavior="padding">
        <Toolbar title={'Sản phẩm'}/>
        <ScrollView>
          <View style={styles.container}> 
            <Text style={styles.textTitle}>{product.title}</Text>
            <Text style={styles.textDescription}>Thông tin {product.title}</Text>
            <View style={styles.viewPrice}>
              <Text style={styles.priceText}>{product.price} VNĐ</Text>
              <Text style={styles.priceText}>Tồn kho: {product.inventory_quantity}</Text>
            </View>
            <View style={styles.imageViewItem}>
                {/* <Image style={styles.imageItem} source={{uri : product.img_src}}></Image> */}
                <Image width={screenWidth-30} height={250}  source={{uri : product.img_src}}></Image>
            </View>
            
            <View style={styles.viewContent}>
                <View style={styles.buyWayView}>
                  <CheckBox
                    iconRight
                    containerStyle={styles.checkboxContainer}
                    textStyle={styles.textCheckbox}
                    title='Mua nhanh'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={checked}
                    onPress={()=>setChecked(!checked)}
                  />
                  <CheckBox
                    iconRight
                    containerStyle={styles.checkboxContainer}
                    textStyle={styles.textCheckbox}
                    title='Thương lượng'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={!checked}
                    onPress={()=>setChecked(!checked)}
                  />
                </View>
            </View>
              {!checked
                        ?<NumberView title='Giá mua' value={priceBuy} vnd={true} setValue={setPriceBuy} height={55}/>
                        :<View>
                          <View style={styles.soBuyView}>
                            <Text style={styles.soBuyText}>Mua từ: 20</Text>
                            <Text style={styles.soBuyText}>Giá: 44.000 VNĐ</Text>
                          </View>
                          <View style={styles.soBuyView}>
                            <Text style={styles.soBuyText}>Mua từ: 50</Text>
                            <Text style={styles.soBuyText}>Giá: 40.000 VNĐ</Text>
                          </View>
                         </View>
              }
            <NumberView title='Số lượng mua' value={quantity} vnd={false} setValue={setQuantity} height={55}/>
            <View style={styles.stepButton}>
              <StepButton title='Mua sản phẩm'  onPress={onPress}/>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
  const screenWidth = Math.round(Dimensions.get('window').width);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flexDirection:'column',
      marginTop:0,
      marginBottom:100,
      marginHorizontal:15  
    },
    toolBar:{
      backgroundColor:'#0099FF',
      width:'100%',
      justifyContent:'center',
      flexDirection:'row',
      alignItems:'center',
      height:70
    },
    textToolBar: {
      color:'white',
      fontSize:18,
      marginTop:13,
      fontWeight:'bold'
    },
    imageViewItem: {
        width:screenWidth,
        alignItems:'center' 
    },
    // imageItem:{
    //     width:screenWidth-30,
    //     height:250,
    //     borderRadius:5
    // },
    textTitle: {
        fontWeight:'bold',
        fontSize:26,
        marginTop:5
    },
    textDescription:{
      fontSize:15,
      marginTop:5
    },
    viewPrice:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:10,
      marginBottom:20
    },
    priceText:{
      fontWeight:'bold',
      fontSize:22,
    },
    viewContent: {
        marginVertical:10,
        flexDirection:'column',
        marginHorizontal:5
    },
    checkboxContainer: {
      marginLeft:0,
      marginRight:0,
      marginTop:0,
      marginBottom:0,
      paddingLeft:0,
      paddingRight:0,
      backgroundColor:'white',
      borderColor:'white',
      
    },
    textCheckbox:{
      fontSize:15,
      fontWeight:'bold',
      marginLeft:0,
      marginTop:0,
      marginBottom:0,
      paddingLeft:0,
      
    },
    buyWayView:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',

    },
    soBuyView:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginHorizontal:5
    },
    soBuyText:{
      fontSize:20,
      color:'#89898f'
    },
    stepButton:{
      flex:1,
      alignItems:'center',
    }
  });
  