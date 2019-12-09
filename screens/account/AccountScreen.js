import React from 'react';
import { StyleSheet, Text, View,Image,ScrollView,FlatList,Alert, AsyncStorage } from 'react-native';
import ToolBar from '../../components/Toolbar'
import TopicOrder from '../../components/profile_components/TopicOrder'
import ProfileItem from '../../components/profile_components/ProfileItem'

const topicsData=[
  {
    id:'1',
    topic:'Đơn mua',
    content:'Quản lý đơn mua, thương lượng và tình trạng đơn hàng',
    topImage:require('../../assets/trolley.png'),
    screen:'BuyOrderScreen'
  },
  {
    id:'2',
    topic:'Đơn bán',
    content:'Quản lý đơn bán, thương lượng và tình trạng đơn hàng',
    topImage:require('../../assets/box.png'),
    screen:'SellOrderScreen'
  },
  {
    id:'3',
    topic:'Quản lý bài đăng',
    content:'Quản lý sản phẩm đăng bán và đăng mua',
    topImage:require('../../assets/package.png'),
    screen:'SellOrderScreen'
  }
]



export default function AccountScreen(props) {
  AsyncStorage.getItem('is_login', (err, result) => {
    console.log("Result ",result)
         if(result==='false'){
          props.navigation.navigate('LoginScreen');
        }
    }
  )


    const onPress= screen=>{
      props.navigation.navigate(screen);
    }
    const Logout = ()=>{
      AsyncStorage.setItem('is_login', 'false')

      // Alert.alert('Đăng xuất thành công!')
      props.navigation.navigate('Login');
    }
    return (
      <View style={styles.container}>
        <ToolBar title={'Trang cá nhân'}/>
        <View style={styles.profileView}>
          <Image style={styles.avatarImage} source={require('../../assets/hrv.png')}/>
          <Text style={styles.shopName}>Blitz Shop</Text>
        </View>
        <ScrollView horizontal style={{marginBottom:20}}>
          <View style={styles.topics}>
              <FlatList
              data={topicsData}
              renderItem={(item) => <TopicOrder topic={item.item.topic} content={item.item.content} topImage={item.item.topImage} onPress={()=>{ onPress(item.item.screen) }} />}
              keyExtractor={item => (item.id)}
              horizontal/>
          </View>
        </ScrollView>
        <ProfileItem title='Đã thích' leftImage={require('../../assets/heart.png')} rightImage={true} onPress={()=>onPress('SellOrderScreen')}/>
        <ProfileItem title='Thiết lập tài khoản' leftImage={require('../../assets/user.png')} rightImage={true} onPress={()=>onPress('SellOrderScreen')}/>
        <ProfileItem title='Trung tâm hỗ trợ' leftImage={require('../../assets/information.png')} rightImage={true} onPress={()=>onPress('SellOrderScreen')}/>
        <ProfileItem title='Đăng xuất' leftImage={require('../../assets/logout.png')} rightImage={false} onPress={Logout}/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flexDirection:'column',
      marginTop:0
    },
    profileView:{
      flexDirection:'row',
      alignItems:'center',
      paddingHorizontal:10,
      marginTop:15
    },
    avatarImage:{
      height:80,
      width:80,
      borderRadius:40
    },
    shopName:{
      color:'black',
      fontSize:25,
      fontWeight:'bold',
      marginLeft:15
    },
    topics:{
      flexDirection:'row',
      marginTop:15,
      paddingHorizontal:15
    }
  });
  