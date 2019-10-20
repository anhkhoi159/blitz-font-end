import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function LoginScreen(props) {
    const MoveToTab =(()=>{
      props.navigation.navigate('MainScreen');
    })
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={MoveToTab}><Text>
        Login
      </Text></TouchableOpacity>
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
  