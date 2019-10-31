import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../screens/login/LoginScreen'
import TabNavigator from './TabNavigator'

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