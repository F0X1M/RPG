import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
 
export default class roll20 extends Component {
 
  constructor(){
 
    super();
 
    this.state={

      NumberHolder : 1
 
    }
  }
 
GenerateRandomNumber=()=>
{
 
var RandomNumber = Math.floor(Math.random() * 20) + 1;
 
this.setState({
 
  NumberHolder : RandomNumber
 
})
}
 
  render() {
    return (
   
      <View style={styles.container} >
 
      <Text style={styles.text}>{this.state.NumberHolder}</Text>
 
      <View style={[{ width: "60%", margin: 10, backgroundColor: "red" }]}>
        <Button 
        onPress={this.GenerateRandomNumber}
        title='Losuj kością'
        color="#BBBBBB"
        />
      </View>
        
      </View>
 
    );
  }
}
 
const styles = StyleSheet.create(
{
  Button:{
    fontSize:20,
  },
  container: {
    flex: 1,
    backgroundColor: '#cccccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
        fontSize:300,
        color:'#FFFFFF',
        marginTop: 30,
        fontStyle: 'italic',
        paddingHorizontal: 10,
        fontWeight: 'bold'
      }
});