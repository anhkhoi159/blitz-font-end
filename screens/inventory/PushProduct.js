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
 import Image from 'react-native-scalable-image';






export default function PushProduct(props) {
  // const { state } = props.navigation;
  // const [product,setProduct] = useState(state.params.product)
  const [step,setStep] = useState('setting')
  // const StepButton = (props)=>(
  //   <TouchableOpacity
  //     style={styles.stepButton}>
  //     <View style={styles.stepView}>
  //       <Text>{props.title}</Text>
  //     </View>
  //   </TouchableOpacity>
  //   )
  const StepPress= action=>{
    setStep(action)
  }
    
    return (
     
        <View style={styles.container}>
          <Toolbar title={'Đẩy hàng'}/>
          <ScrollView>
            <View style={styles.stepView}>
              <TouchableOpacity
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
          

            {/* <View style={styles.productView}>
              <Image height={150} width={150}  source={{uri:product.img_src}}/>
              <View style={styles.contentView}>
                <Text style={styles.titleContent}>{product.title}</Text>
                <View style={styles.infoView}>
                  <Text style={styles.infoText}>Giá hiện tại:</Text>
                  <Text style={styles.infoText}>{product.price} VNĐ</Text>
                </View>
                <View style={styles.infoView}>
                  <Text style={styles.infoText}>Số lượng:</Text>
                  <Text style={styles.infoText}>{product.inventory_quantity}</Text>
                </View>
              </View>
            </View> */}
          </ScrollView>
        </View>
      
    );
  }
  const screenWidth = Math.round(Dimensions.get('window').width);
  const styles = StyleSheet.create({
    container: {         
      flexDirection:'column',
      paddingBottom:50,
     
    },
    productView:{
      flexDirection:'row',
      marginHorizontal:15,
      marginTop:15,
    },
    contentView:{
      flex:1,
      flexDirection:'column',
      marginTop:10
    },
    titleContent:{
      fontSize:16,
      fontWeight:'bold',
      marginBottom:10
    },
    infoView:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:10,
      
    },
    infoText:{
      fontWeight:'500',
      fontSize:14
    },
    stepView:{
      flexDirection:'row-reverse',
      justifyContent:'center',
      marginTop:15
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
  