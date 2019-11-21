import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../screens/login/LoginScreen'
import TabNavigator from './TabNavigator'

const MainStack = createStackNavigator({
  MainScreen :{
    screen: TabNavigator,
   
  }, 
  LoginScreen: {
    screen: LoginScreen,
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