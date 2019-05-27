import React, { Component} from 'react'
import {StyleSheet, View , Text ,Image} from 'react-native'
import {getDate} from '../network/calendarservice'


export default class DailyCalendar extends Component<Props> {


    componentDidMount(){
        getDate();
    }

    render() {
       return(
         <View style = {style.container}>
          <Text style = {{fontSize : 22 , paddingTop : 50}} > English date 14-04-2019</Text>
          <View style= {style.tamildateContainer}>
          <Image source = {require('../../resources/images/icon_previous.png')}/>
          <View style = {style.tamildateInfo}>
          <Text style = {{fontSize : 28}}> tamilDate 28 </Text>
          <Text style = {{fontSize : 22}}> tamilMonth </Text>
          <Text style = {{fontSize : 22}}> tamilYear </Text>
          </View>
          <Image source = {require('../../resources/images/icon_next.png')}/>
          </View>
          <View style = {style.tamildateOtherInfo}>
          <Text style = {{fontSize : 22, paddingBottom: 15}}> Nalla Neram </Text>
          <Text style = {{fontSize : 22, paddingBottom: 15}}> Emakandam </Text>
          </View>
         </View>
       )  
    }
}

var style = StyleSheet.create({

    container:{
     flex :1
    },
    tamildateContainer:{
        flex:2,
        flexDirection:"row",
        alignItems:"center",
        alignContent: 'space-around'
    },
    tamildateInfo:{
        flex:1,
        flexDirection:"column",
        alignItems:"center"
    },
    tamildateOtherInfo:{
        flex:1,
        alignItems:"flex-start",
        justifyContent: 'flex-start'
    }



});

