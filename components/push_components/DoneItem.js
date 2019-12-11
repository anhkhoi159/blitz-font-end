import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import RecommendItem from '../RecommendItem'
import StepButton from '../StepButton'
// import { ScrollView } from 'react-native-gesture-handler';

export default function DoneItem(props) {
  const {mess,target,product,donePress,onPressTitle} = props
  const finishPress=()=>{
    donePress()
  }
  return (
    <View style={styles.container}>
        <Text style={styles.messText}>{mess}</Text>
        <Text style={styles.suggestText}>{target}</Text>
        <ScrollView horizontal>
        <View style={{flexDirection:"row"}}>

        <RecommendItem/>
        <RecommendItem/>
        <RecommendItem/>
        </View>
        </ScrollView>
        <View style={styles.stepButton}>
          <StepButton title={onPressTitle} onPress={finishPress} />
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
  },
  stepButton:{
    flex:1,
    alignItems:'center' ,
    marginTop:70,
  
  }     
});
  