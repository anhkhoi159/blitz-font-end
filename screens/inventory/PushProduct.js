import React,{ useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Dimensions,
  ScrollView,
  Button,
  TouchableOpacity
 } from 'react-native';
 import Toolbar from '../../components/Toolbar'
 import SettingItem from '../../components/push_components/SettingItem'
 import ConfirmItem from '../../components/push_components/ConfirmItem'
 import DoneItem from '../../components/push_components/DoneItem'






export default function PushProduct(props) {
  const { state } = props.navigation;
  const [product,setProduct] = useState(state.params.product)
  const [step,setStep] = useState('setting')
  const [numberStep,setNumberStep]= useState(0)
  const mess ='Sản phẩm đã được đưa lên chợ thành công' 
  let content;
  const StepPress= action=>{
    setStep(action)
  }
  const CheckStep = (newNumber,nextStep)=>{
    if(newNumber>numberStep){
      setNumberStep(newNumber)
      
    }
    setStep(nextStep)
  }

  const DonePress = ()=>{
    props.navigation.navigate('InventoryScreen');
  }
  console.log("product "+JSON.stringify(product))
  switch(step){
    case 'setting':
      content = <SettingItem onPress={CheckStep} product={product}/>
      break
    case 'confirm':
        content = <ConfirmItem onPress={CheckStep} product={product}/>
        break
    case 'done':
      content = <DoneItem donePress={DonePress} mess={mess} target='Gợi ý hàng' onPressTitle='Quay về kho'/>
      break
  }

    return (
     
        <View style={styles.container}>
          <Toolbar title={'Đẩy hàng'}/>
          <View style={{flex:1}}>
          <ScrollView>
            
            <View style={styles.stepView}>
              <TouchableOpacity
                disabled={numberStep>1?false:true}
                style={{position:'relative',left:35}}
                onPress={()=>StepPress('done')}>
                <View style={[styles.stepcContentView,{
                  backgroundColor:step=='done'?'#0099FF':'white',
                  borderColor:step=='done'?'#0099FF':'#ECEBF2'
                  }]}>
                  <Text  style={[styles.textStep,{color:step=='done'?'white':'#ECEBF2'}]}>
                    Hoàn tất
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                disabled={numberStep>0?false:true}
                style={{position:'relative'}}
                onPress={()=>StepPress('confirm')}>
                <View style={[styles.stepcContentView,{
                  backgroundColor:step=='confirm'?'#0099FF':'white',
                  borderColor:step=='confirm'?'#0099FF':'#ECEBF2'
                  }]}>
                  <Text style={[styles.textStep,{color:step=='confirm'?'white':'#ECEBF2'}]}>
                    Xác nhận
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                
                style={{position:'relative',right:35}}
                onPress={()=>StepPress('setting')}>
                <View style={[styles.stepcContentView,{
                  backgroundColor:step=='setting'?'#0099FF':'white',
                  borderColor:step=='setting'?'#0099FF':'#ECEBF2'
                  }]}>
                  <Text style={[styles.textStep,{color:step=='setting'?'white':'#ECEBF2'}]}>
                    Thiếp lập sản phẩm
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            {content}
          </ScrollView>
          
          </View>
        </View>
      
    );
  }
  const screenWidth = Math.round(Dimensions.get('window').width);
  const styles = StyleSheet.create({
    container: {         
      flexDirection:'column',
     
      flex:1
     
    },
    // productView:{
    //   flexDirection:'row',
    //   marginHorizontal:15,
    //   marginTop:15,
    // },
    // contentView:{
    //   flex:1,
    //   flexDirection:'column',
    //   marginTop:10
    // },
    // titleContent:{
    //   fontSize:16,
    //   fontWeight:'bold',
    //   marginBottom:10
    // },
    // infoView:{
    //   flexDirection:'row',
    //   justifyContent:'space-between',
    //   marginTop:10,
      
    // },
    // infoText:{
    //   fontWeight:'500',
    //   fontSize:14
    // },
    stepView:{
      flexDirection:'row-reverse',
      justifyContent:'center',
      marginTop:15,
      flex:1
    },
    stepButton:{
     
    },
    stepcContentView:{
      justifyContent:'center',
      alignItems:'center',
      borderRadius:24,
      width:150,
      height:45,
      borderColor:'#ECEBF2',
      borderWidth:2

    },
    textStep:{
      fontSize:12,
      fontWeight:'bold',
    }

    
  });
  