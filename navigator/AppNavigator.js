import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../screens/login/LoginScreen'
import TabNavigator from './TabNavigator'
import {AsyncStorage } from 'react-native';

// const sStack = AsyncStorage.getItem('is_login', (err, result) => {
//   if(result==='true'){
//       return createStackNavigator({
       
//         MainScreen :{
//           screen: TabNavigator,
         
//         },
//         LoginScreen: {
//           screen: LoginScreen,
//         },
        
      
//          },
//          {
//              headerMode: 'none',
//              navigationOptions: {
//                headerVisible: false,
//              }
//          }  
      
//       )
//   }else{
//     return createStackNavigator({
//       LoginScreen: {
//         screen: LoginScreen,
//       },
//       MainScreen :{
//         screen: TabNavigator,
       
//       },
      
      
    
//        },
//        {
//            headerMode: 'none',
//            navigationOptions: {
//              headerVisible: false,
//            }
//        }  
    
//     )

//   }

// }
// )

const MainStack = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
  },
  MainScreen :{
    screen: TabNavigator,
   
  },
  
  

   },
   {
       headerMode: 'none',
       navigationOptions: {
         headerVisible: false,
       }
   }  

)
export default MainStack