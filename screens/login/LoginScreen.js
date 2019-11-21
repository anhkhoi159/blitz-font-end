import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,AsyncStorage } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import { NavigationActions } from 'react-navigation';
import { WebView } from 'react-native-webview';

export default function LoginScreen(props) {
    const urlLogin = 'http://blitz-api-env.ap-southeast-1.elasticbeanstalk.com/'
    AsyncStorage.setItem('is_login', 'false')
    AsyncStorage.getItem('is_login', (err, result) => {
      console.log("Result ",result)
          if(result==='true'){
            props.navigation.navigate('InventoryScreen');
          }
      }
    )
     const [isLogin,setIsLogin] = useState(false)
    const [showWvLogin,setShowWvLogin] = useState(false)
    

  

    onNavigationStateChange =  (navState) => {
      let successUrl = decodeURIComponent(navState.url)
      if(successUrl.indexOf(urlLogin+'ok/?token')=== 0){
        successUrl = (successUrl.replace('http://blitz-api-env.ap-southeast-1.elasticbeanstalk.com/ok/?token=', '')).replace(/\'/g, '"');
        
      
        console.log("token ",JSON.parse(successUrl).access_token)
        AsyncStorage.setItem('my_token', JSON.parse(successUrl).access_token, () => {
          
        }
      )
      AsyncStorage.setItem('is_login', 'true')
      props.navigation.navigate('InventoryScreen');
      // setShowWvLogin(false)
      // setIsLogin(true)
        
        
      }
   }
   
   
  

    if(showWvLogin){
      console.log("show webview")
      return(<WebView 
        source={{ uri: urlLogin+'auth' }} 
        style={{  marginTop:20}}   
        onNavigationStateChange={this.onNavigationStateChange}
        incognito={true}
        />)
    }
  

    const LoginAction = ()=>{
        setShowWvLogin(true)
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={LoginAction}>
          <View>
          <GradientButton
           text="Login" 
           height={60}
           width={200}
           radius={15} 
           blueMarine 
           impact
           textStyle={{ fontSize: 20 }}
           onPressAction={LoginAction} />
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
  