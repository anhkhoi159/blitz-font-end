import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';

export default function LoginScreen(props) {
    const MoveToTab =(()=>{
      props.navigation.navigate('MainScreen');
    })
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={MoveToTab}>
          <View>
          <GradientButton
           text="Login" 
           height={60}
           width={200}
           radius={15} 
           blueMarine 
           impact
           textStyle={{ fontSize: 20 }}
           onPressAction={MoveToTab} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  