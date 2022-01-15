import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { useNavigation } from "@react-navigation/core";
import { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';

const roll10 = () => {
  const navigation = useNavigation();
  const sensitivity = 3;
  const [RandomNumber, setRandomNumber] = useState(0);
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
  }, []);

  var { x, y, z } = data;


  const GenerateRandomNumber = () => {
    if ((x > sensitivity || x < -sensitivity) &&
      (y > sensitivity || y < -sensitivity) || (x > sensitivity || x < -sensitivity) &&
      (z > sensitivity || z < -sensitivity) || (y > sensitivity || y < -sensitivity) &&
      (z > sensitivity || z < -sensitivity)) {
      setRandomNumber(Math.floor(Math.random() * 10) + 1);
      _unsubscribe();
      x = 0;
      y = 0;
      z = 0;
      data.x = 0;
      data.y = 0;
      data.z = 0;
    }
  };
  return (
    <View style={styles.container} >
      {GenerateRandomNumber()}
      <Text style={styles.text}>{RandomNumber}</Text>
      <View style={[{ width: "60%", margin: 10, backgroundColor: "red" }]}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    Button: {
      fontSize: 20,
    },
    container: {
      flex: 1,
      backgroundColor: '#cccccc',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 300,
      color: '#FFFFFF',
      marginTop: 30,
      fontStyle: 'italic',
      paddingHorizontal: 10,
      fontWeight: 'bold'
    }
  });

export default roll10;