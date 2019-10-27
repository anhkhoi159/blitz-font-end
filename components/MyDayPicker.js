import React, { Component } from 'react'
import {View, Button, Platform,StyleSheet  } from 'react-native'
import DatePicker from 'react-native-datepicker'

export default class MyDatePicker extends Component {
   
  constructor(props){
    super(props)
    this.state = {date:new Date()}
  }
 
  render(){
    return (
      <DatePicker
 
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate={new Date()}
        maxDate="2020-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        customStyles={{
          dateInput: {
            borderWidth:0,          
          },
          dateTouchBody:{
            margin:0,
            padding:0,
            height:20,
            width:80,
            // backgroundColor:'blue'
         
            
          },
         
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    )
  }
}

const styles = StyleSheet.create({
  dateTimePicker: {
    // width:100,
    height:10,
    
    // justifyContent:'flex-start',
    margin:0,
    padding:0,
    paddingBottom:0,
    backgroundColor:'red',
    alignItems:'center'
  },
});