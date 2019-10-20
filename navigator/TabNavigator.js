import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
// import { createBottomTabNavigator } from 'react-navigation-tabs'
import InventoryScreen from '../screens/inventory/InventoryScreen'
import ResultScreen from '../screens/result/ResultScreen'
import AccountScreen from '../screens/account/AccountScreen'

const InvnetoryStack = createStackNavigator({
    InventoryScreen: {
        screen: InventoryScreen,
        headerMode: 'none',
       navigationOptions: {
         headerVisible: false,
       }
      },
   }
        

)
const ResultStack = createStackNavigator({
    ResultScreen: {
      screen: ResultScreen,
    },
 }
)
const AccountStack = createStackNavigator({
    AccountScreen: {
      screen: AccountScreen,
    },
 }
)

const TabNavigator = createBottomTabNavigator({
    InvnetoryStack,
    ResultStack,
    AccountStack
})



export default TabNavigator