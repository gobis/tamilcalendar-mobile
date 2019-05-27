import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , TextInput,Button} from 'react-native';


export default class HomeScreen extends Component<Props> {

  constructor (props) {
    super(props)
    this.state = {
      placeEntered,
      placeList:[]
    }
 }

   placeSubmitHandler = (place) => {
     this.setState( prevState => {
       placeList = prevState.placeList.concat( {
         key: Math.random(),
         value:place
       }); 
     });
   } 

   onTextChanged = (input) => {
     // add this input in to array 
     this.setState({});
   }
   
    render() {
      return (
        <View style={styles.container}>
           <TextInput 
              title = "add places"
              onChangeText = {this.onTextChanged} 
              value = {this.state.placeEntered}   />
           <Button title = "add" onPress={this.placeSubmitHandler} /> 
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      backgroundColor: '#F5FCFF',
      
    }
  });

  