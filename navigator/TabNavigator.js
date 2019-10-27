import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
// import { createBottomTabNavigator } from 'react-navigation-tabs'
import InventoryScreen from '../screens/inventory/InventoryScreen'
import RecommendScreen from '../screens/inventory/RecommendScreen'
import ResultScreen from '../screens/result/ResultScreen'
import AccountScreen from '../screens/account/AccountScreen'
import TabBarIcon from '../components/TabBarIcon';
import { StyleSheet,Platform } from 'react-native';
//Inventory Tab
const InvnetoryStack = createStackNavigator({
  InventoryScreen: {
    screen: InventoryScreen,
  //   headerMode: 'none',
  //  navigationOptions: {
  //    headerVisible: false,
  //  }
  },
    RecommendScreen : {
      screen:RecommendScreen
    },
    
     
   }
)
InvnetoryStack.navigationOptions = {
  tabBarLabel: 'Inventory',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-add-circle${focused ? '' : '-outline'}`
          : 'md-add-circle'
      }
    />
  ),
};

//Result Tab
const ResultStack = createStackNavigator({
    ResultScreen: {
      screen: ResultScreen,
    },
 }
)
ResultStack.navigationOptions = {
  tabBarLabel: 'Result',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-settings'
          : 'md-settings'
      }
    />
  ),
};

//Account Tab
const AccountStack = createStackNavigator({
    AccountScreen: {
      screen: AccountScreen,
    },
 }
)
AccountStack.navigationOptions = {
  tabBarLabel: 'Account',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-checkmark-circle${focused ? '' : '-outline'}`
          : 'md-checkmark-circle'
      }
    />
  ),
};

//TabNavigator
const TabNavigator = createBottomTabNavigator({
    InvnetoryStack,
    ResultStack,
    AccountStack
})



export default TabNavigator