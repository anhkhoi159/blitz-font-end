import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
// import { createBottomTabNavigator } from 'react-navigation-tabs'
import InventoryScreen from '../screens/inventory/InventoryScreen'
import ProductScreen from '../screens/inventory/ProductScreen'
import PushProduct from '../screens/inventory/PushProduct'
import NotifyScreen from '../screens/notify/NotifyScreen'
import AccountScreen from '../screens/account/AccountScreen'
import BuyOrderScreen from '../screens/account/BuyOrderScreen'
import SellOrderScreen from '../screens/account/SellOrderScreen'
import OfferScreen from '../screens/offer/OfferScreen'
import RequestScreen from '../screens/request/RequestScreen'
import OfferDetail from '../screens/offer/OfferDetail'
import OfferConfirm from '../screens/offer/OfferConfirm'
import OfferDone from '../screens/offer/OfferDone'

import TabBarIcon from '../components/TabBarIcon';
import { StyleSheet,Platform } from 'react-native';

//Inventory Tab
const InvnetoryStack = createStackNavigator({
    
  InventoryScreen: {
    screen: InventoryScreen,  
  },
  ProductScreen : {
    screen:ProductScreen
  },
  PushProduct:{
    screen:PushProduct
  },
 
},
  {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
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

//Notify Tab
const NotifyStack = createStackNavigator({
    NotifyScreen: {
      screen: NotifyScreen,
    },
 }
)
NotifyStack.navigationOptions = {
  tabBarLabel: 'Notify',
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

//Offer Tab
const OfferStack = createStackNavigator({
  OfferScreen: {
    screen: OfferScreen,
  },
  OfferDone:{
    screen: OfferDone,
  },
  OfferDetail: {
    screen: OfferDetail,
  },
  OfferConfirm:{
    screen: OfferConfirm,
  },
 
   
 }, 
 {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
  }
)
OfferStack.navigationOptions = {
  tabBarLabel: 'Offer',
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

//Request Tab
const RequestStack = createStackNavigator({
  
  RequestScreen: {
      screen: RequestScreen,
    },
    
 }
)
RequestStack.navigationOptions = {
  tabBarLabel: 'Request',
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

//Account Tab
const AccountStack = createStackNavigator({
   
  AccountScreen: {
      screen: AccountScreen,
    },
    SellOrderScreen:{
      screen:SellOrderScreen
    },
    BuyOrderScreen:{
      screen:BuyOrderScreen
    }, 
    
 }, 
 {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
  }
)
AccountStack.navigationOptions = {
  tabBarLabel: 'Account',
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

//TabNavigator
const TabNavigator = createBottomTabNavigator({
    InvnetoryStack,
    OfferStack, 
    RequestStack,
    NotifyStack,
    AccountStack,
    
})



export default TabNavigator