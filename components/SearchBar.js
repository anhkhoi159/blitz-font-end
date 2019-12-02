import React,{useState} from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Image from 'react-native-scalable-image';

export default function Searchbar(props) {
    const { title } = props

    const[search,setSearch] = useState("")


    updateSearch = search => {
        setSearch(search)
      };
    return (
        <View style={styles.container}>
            <SearchBar
                placeholder="Tìm kiếm..."
                value={""}
                onChangeText={updateSearch}
                value={search}
                lightTheme
                containerStyle={styles.searchBar}
                inputContainerStyle={styles.inputSearchBar}
                // leftIconContainerStyle={styles.iconSearchBar}
                platform={"ios"}
            />
            <Image style={{marginRight:8,marginTop:5,}} height={23} width={23}  source={require('../assets/filter-1.png')}/>
            <Image style={{marginRight:8,marginTop:5,}} height={25} width={25}  source={require('../assets/sort-down.png')}/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:50,
        alignItems:'center',
        marginTop:5,
        marginBottom:5
      },
      searchBar:{
          flex:1,
         backgroundColor:'white',
         borderBottomColor:'white',
         borderTopColor:'green',
         marginTop:0,
         marginLeft:3,
         marginBottom:0,
         paddingTop:0,
         paddingBottom:0
      },
      inputSearchBar:{
        //   backgroundColor:'white',

      },
      iconSearchBar:{
          width:25,
          height:25
      }

  });
  