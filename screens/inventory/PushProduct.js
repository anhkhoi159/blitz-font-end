import React,{ useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Dimensions,
  ScrollView
 } from 'react-native';
 import Toolbar from '../../components/Toolbar'
 import Image from 'react-native-scalable-image';


export default function PushProduct(props) {
  const { state } = props.navigation;
  const [product,setProduct] = useState(state.params.product)
    return (
      <ScrollView>
        <View style={styles.container}>
          <Toolbar title={"Đẩy hàng"}/>
          <View style={styles.productView}>
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
          </View>
        </View>
      </ScrollView>
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
    }
    
  });
  