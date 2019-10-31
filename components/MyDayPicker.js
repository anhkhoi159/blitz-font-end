import React, { Component,useState } from 'react'
import {View, Button, Platform,StyleSheet  } from 'react-native'
import DatePicker from 'react-native-datepicker'

export default function MyDatePicker(props){
  const [myDate, setMyDate] = useState(new Date());

  //  const { date } = props
  //   if(!date){
  //     date= new Date()
  //   }
  const onPressConfirm = date => {
    setMyDate(date)
  }
    return (
      <DatePicker
        style={{width: 165}}
        date={myDate}
        mode="datetime"
        placeholder="select date"
        format="DD/MM/YYYY HH:mm"
        minDate={new Date()}
        maxDate="01/01/2022 23:59"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        is24Hour={false}
        customStyles={{
          dateIcon: {
            position: 'relative',
            left: 0,
            top:0,
            marginLeft:0 
          },
          dateInput: {
            width:0,
            borderWidth:0,  
          },
          dateTouchBody:{
            width:160
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={onPressConfirm}
      />
      // <DatePicker
      //   date={this.state.date}
      //   mode="date"
      //   placeholder="select date"
      //   format="YYYY-MM-DD"
      //   minDate={new Date()}
      //   maxDate="2020-06-01"
      //   confirmBtnText="Confirm"
      //   cancelBtnText="Cancel"
      //   showIcon={false}
      //   customStyles={{
      //     dateInput: {
      //       borderWidth:0,          
      //     },
      //     dateTouchBody:{
      //       margin:0,
      //       padding:0,
      //       height:20,
      //       width:80,
      //     },
      //     dateIcon: {
      //       position: 'absolute',
      //       left: 0,
      //       top: 4,
      //       marginLeft: 0,
      //     },
         
      //     // ... You can check the source to find the other keys.
      //   }}
      //   onDateChange={(date) => {this.setState({date: date})}}
      // />
   
    )
  
}

const styles = StyleSheet.create({
  dateTimePicker: {
    height:10,
    margin:0,
    padding:0,
    paddingBottom:0,
    backgroundColor:'red',
    alignItems:'center'
  },
});