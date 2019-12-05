import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import RecommendItem from '../RecommendItem'


export default function DoneItem(props) {
  return (
    <View style={styles.container}>
        <Text style={styles.messText}>Sản phẩm đã được đưa lên chợ thành công</Text>
        <Text style={styles.suggestText}>Gợi ý người mua</Text>
        <View style={{flexDirection:"row"}}>
        <RecommendItem/>
        <RecommendItem/>
        <RecommendItem/>
        </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
        marginTop:40,
        justifyContent:'center',
       
  },
  messText:{
    fontSize:28,
    fontWeight:'bold',
    color:'#27262D',
    textAlign:'center',
    marginHorizontal:20,
    marginBottom:80
  },
  suggestText:{
    fontSize:17,
    color:'#27262D',
    fontWeight:'bold',
    marginHorizontal:25,
    marginBottom:15
  }   
});
  