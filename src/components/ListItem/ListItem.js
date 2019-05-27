import React from 'react'
import {View, TextView , StyleSheet } from 'react-native'



const listItem = (props) => {

    <View>
      <TextView>props.placeName</TextView>
    </View>

}


const styles = StyleSheet.create = {

    listStyle : {
        width: "100%",
        backgroundColor : "eee",
        padding : 10
         
    }

}


export default listItem ;