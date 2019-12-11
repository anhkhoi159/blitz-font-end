import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,AsyncStorage,ActivityIndicator  } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import { NavigationActions } from 'react-navigation';
import { WebView } from 'react-native-webview';


export default function LoginScreen(props) {
    const urlLogin = 'http://blitz-api-env.ap-southeast-1.elasticbeanstalk.com/'
    // AsyncStorage.setItem('is_login', 'false')
    AsyncStorage.getItem('is_login', (err, result) => {
          if(result=='true'){
            props.navigation.navigate('InventoryScreen');
            // return (
            //   <View style={styles.loadingStyle}>
            //     <ActivityIndicator size={'large'} />
            //   </View>
            // );
            
          }else if (result=='false'){
            setLoading(false)
          }
      }
    )
    const [loading, setLoading] = useState(false);
    const [isLogin,setIsLogin] = useState(false)
    const [showWvLogin,setShowWvLogin] = useState(false)
    

    if (loading) {
      return (
        <View style={styles.loadingStyle}>
          <ActivityIndicator size={'large'}/>
        </View>
      );
    }

    onNavigationStateChange =  async (navState) => {
      let successUrl = decodeURIComponent(navState.url)
      if(successUrl.indexOf(urlLogin+'ok/?token')=== 0){
        successUrl = (successUrl.replace('http://blitz-api-env.ap-southeast-1.elasticbeanstalk.com/ok/?token=', '')).replace(/\'/g, '"');
        setLoading(true)
        AsyncStorage.setItem('is_login', 'true')
        
        var token = JSON.parse(successUrl).access_token
        console.log("token ",token)
        AsyncStorage.setItem('my_token', token)
        props.navigation.navigate('LoginScreen');
        var bearer = 'Bearer ' + token;
        const response = await fetch('https://apis.haravan.com/com/shop.json?fields=id,name,address1,phone', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': bearer,
          },
        });
        const jsonData = await response.json();
        // console.log("mydata: ",JSON.stringify(jsonData.shop))
        AsyncStorage.setItem('shop_id', jsonData.shop.id.toString())
        AsyncStorage.setItem('shop_name', jsonData.shop.name.toString())  
        AsyncStorage.setItem('shop_address', jsonData.shop.address1.toString())


        const sync = await fetch('http://blitz-api-env.ap-southeast-1.elasticbeanstalk.com/sync', {
        method: 'POST',
         headers: {
          'Content-Type': 'application/json',
          },
          body:JSON.stringify({
          'token': token,
          }),
        });

        props.navigation.navigate('InventoryScreen');
        // console.log("sync: ",JSON.stringify(sync))
        // const jsonDatasync = await sync.json();
        // console.log("jsonDatasync: ",JSON.stringify(jsonDatasync))
        // console.log("sync data: ",JSON.stringify(jsonDatasync.data))
    
        
      }
   }
   
   
  

    if(showWvLogin){
     
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
    loadingStyle:{
      flex: 1,
      justifyContent:'center',
      alignItems:'center'
    }
  });
  