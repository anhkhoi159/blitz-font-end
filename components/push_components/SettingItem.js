import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Modal,TouchableHighlight,AsyncStorage } from 'react-native';
import NumberView from '../NumberView'
import TextView from '../TextView'
import StepButton from '../StepButton'
import { CheckBox } from 'react-native-elements'
import ButtonTwoValue from '../ButtonTwoValue'
import ResultTwoValue from '../ResultTwoValue'
import GSItem from '../push_components/GSItem'

export default function SettingItem(props) {
  const { product,onPress,setOpacity} = props
  const [price,setPrice] = useState(product.price.toString())
  const [quantity,setQuantity] = useState(product.inventory_quantity.toString())
  const [dialog,setDialog] = useState(false)
  const [dialogGS,setDialogGS] = useState(false)
  const [checkedQB,setCheckedQB] = useState(false)
  const [buytype,setBuytype] = useState('')
  const [address,setAddress] = useState('')
  const [gsData,setGSData] = useState('')



  AsyncStorage.getItem('shop_address', (err, result) => {
        if(result && result!=''){
          setAddress(result)
        }
    }
  )
  
  const settingPress=()=>{
    product.price = price
    product.inventory_quantity =quantity
    product.quickbuy = checkedQB

    console.log("product"+JSON.stringify(product))
    onPress(1,'confirm')
  }
  if(dialog || dialogGS){
    setOpacity(0.4)
  }else{
    setOpacity(1)
  }
  
  const ConfirmQB = (checked)=>{
    setDialog(false)
    // console.log("checked "+checked)
    if(checked==false){
      setBuytype('Thương lượng')
    }else{
      setBuytype('Mua nhanh')
    }
  }
  const ConfirmGS = ()=>{
    setDialogGS(false)

  }
  
  const SetQuantitySell = (newQuantity)=>{
    console.log("newQuantity "+newQuantity)
    if(newQuantity>=product.inventory_quantity){
      setQuantity(product.inventory_quantity)
    }else{
      setQuantity(newQuantity)
    }
  } 
  
  return (
    <View style={styles.container}>
         {/* Dialog QB*/}
         <Modal
            animationType="slide"
            transparent={false}
            visible={dialog}
            transparent
            >
            <View style={styles.dialogBuytype}>
              <View style={styles.viewBuytpye}>
                <Text style={styles.textBuytype}>Cách thức mua</Text>
                <TouchableOpacity onPress={()=>setCheckedQB(!checkedQB)}>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View  style={{maxWidth:170 }}>
                      <Text style={styles.quichBuy}>Mua nhanh</Text>
                      <Text style={styles.infoQuichBuy}>Người mua mua không qua bước thương lượng</Text>
                    </View>
                    <CheckBox
                      iconRight
                      containerStyle={styles.checkboxContainer}
                      textStyle={styles.textCheckbox}
                      title='Mua nhanh'
                      checkedIcon='dot-circle-o'
                      uncheckedIcon='circle-o'
                      checked={checkedQB}
                      onPress={()=>setCheckedQB(!checkedQB)}
                    />
                  </View>
                </TouchableOpacity>
                <View style={styles.viewBottomQB}>
                  <Text style={styles.noteQB}>*Lưu ý: Cách thức mua mặc định là thương lượng, nếu chọn mua nhanh thì sẽ có thêm chức năng mua nhanh</Text>
                  <StepButton title='Xác nhận' onPress={()=>ConfirmQB(checkedQB)} />
                </View>
              </View>
            </View>
          </Modal>

          {/* Dialog GS*/}
          <Modal
            animationType="slide"
            transparent={false}
            visible={dialogGS}
            transparent
           >
            <View style={styles.dialogBuytype}>
              <View style={styles.viewBuytpye}>
                <Text style={styles.textBuytype}>Giá sỉ</Text>
                <GSItem quantity='20' price='44.000'/>
                <GSItem quantity='50' price='42.000'/>
                <View style={styles.viewBottomQB}>
                  <StepButton title='Xác nhận' onPress={()=>ConfirmGS()} />
                </View>
              </View>
            </View>
          </Modal>

         {/* Main UI */}
         <View style={[styles.container,]}>
          <Text style={styles.textTitle}>{product.title}</Text>
          {/* <Text style={styles.textContent}>product.price VNĐ   Tồn kho: product.inventory_quantity</Text> */}
          <Text style={styles.textContent}>{product.price} VNĐ   Tồn kho: {product.inventory_quantity}</Text>
          
          <NumberView title='Giá bán' value={price} vnd={true} setValue={setPrice} height={40}/>
          <NumberView title='Số lượng bán' value={quantity} vnd={false} setValue={setQuantity} height={40}/>
          <ButtonTwoValue title='Thiết lập giá sỉ' value={gsData}  press={()=> setDialogGS(true)}/>
          <ButtonTwoValue title='Cách thức mua' value={buytype}  press={()=>setDialog(true)}/>
          <ResultTwoValue title='Địa chỉ' value={address} />
          <View style={styles.stepButton}>
            <StepButton title='Tiếp theo' onPress={settingPress} />
          </View>
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
    
    },
    // dialogBuytype
    dialogBuytype:{
      flex:1,
      justifyContent:'center',
      alignItems:'stretch',
      marginHorizontal:20,
      marginVertical:50
    },
    viewBuytpye:{
      flex:1,
      backgroundColor:'#ECEBF2',
      borderRadius:25,
      maxHeight:400,
      alignItems:'stretch',
      paddingHorizontal:20,
      paddingTop:30
    },
    textBuytype:{
      fontSize:25,
      fontWeight:'bold',
      color:'black',
      marginBottom:25,
      textAlign:'center'
    },
    quichBuy:{
      fontSize:17,
      fontWeight:'bold',
      color:'black',
      marginBottom:7
    },
    infoQuichBuy:{
      fontSize:14,
      color:'black'
    },
    checkboxContainer: {
      marginLeft:0,
      marginRight:0,
      marginTop:0,
      marginBottom:0,
      paddingLeft:0,
      paddingRight:0,
      backgroundColor:'#ECEBF2',
      borderColor:'#ECEBF2',
      
    },
    textCheckbox:{
      fontSize:15,
      fontWeight:'bold',
      width:0,
      marginLeft:0,
      marginTop:0,
      marginBottom:0,
      paddingLeft:0,
      
    },
    viewBottomQB:{
      position:'absolute',
      alignItems:'center',
      bottom:0,
      left:20,
      right:20,
      bottom:30
      

    },
    noteQB:{
      color:'#818181',
      fontSize:14
    }

     
  });
  