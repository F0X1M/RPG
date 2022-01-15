import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { useNavigation } from "@react-navigation/core";
import { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';

const roll4 = () => {
const navigation = useNavigation();
  const [RandomNumber,setRandomNumber] = useState(0);
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);
  

  const _slow = () => {
    Accelerometer.setUpdateInterval(1000);
  };

  const _fast = () => {
    Accelerometer.setUpdateInterval(16);
  };

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
  },[]);

  var { x, y, z } = data;

const GenerateRandomNumber = () => {
  if ((x > 3 || x < -3) && (y > 3 || y < -3 )&& (z> 3 || z < -3)){
      console.log('JEBUT');
      setRandomNumber(Math.floor(Math.random() * 4) + 1);
    _unsubscribe();
    x = 0;
    y = 0;
    z = 0;
    data.x=0;
    data.y=0;
    data.z=0;
    }
};
console.log(x,y,z);
    return (
      <View style={styles.container} >
      {GenerateRandomNumber()}    
      <Text style={styles.text}>{RandomNumber}</Text>
      <View style={[{ width: "60%", margin: 10, backgroundColor: "red" }]}>
        <Button 
        //onPress={this.GenerateRandomNumber}
        title='Losuj'
        color="#BBBBBB"
        />
      </View>
        
      </View>
 
    );
    
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

export default roll4;