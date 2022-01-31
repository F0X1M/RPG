import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { useNavigation } from "@react-navigation/core";
import { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';// importuje sensor , polozenie telefonu

//funkcja 
const roll4 = () => {
const navigation = useNavigation();//odwolanie do nawigacji 
const sensitivity = 2;//
  const [RandomNumber,setRandomNumber] = useState(0);  // tworzenie zmienna z poczatku jest 0
  const [data, setData] = useState({ //tworzenie konteneru który ma info o wspolrzędnych
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null); //ustawienie akselometra... brak ustawienia
  

  const _slow = () => { //wolna aktualizacja akselometra
    Accelerometer.setUpdateInterval(1000);
  };

  const _fast = () => {
    Accelerometer.setUpdateInterval(16);// szybka aktualizacja  akselometra
  };

  //inicjuje akselometer, uruchomienie
  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData);
      })
    );
  };
// usuwa akselometer
  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  //przy uruchomieniu  ekranu włąćza akselometer a przy wyjsciu wyłąćza
  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  },[]);

  var { x, y, z } = data; // zmiena przytrzymująca pozycje akselometra


  const GenerateRandomNumber = () => {  //metoda generująca wartosc wyrzutu z kosci pomiedzy <1 a 4> 
  if ((x > sensitivity || x < -sensitivity) && //czułość wyrzutu-sensitivity....  aby był wyrzut musi wyczuć ruch w 2 kierunkach
    (y > sensitivity || y < -sensitivity) || (x > sensitivity || x < -sensitivity) &&
    (z > sensitivity || z < -sensitivity) || (y > sensitivity || y < -sensitivity) &&
    (z > sensitivity || z < -sensitivity)) {  
    setRandomNumber(Math.floor(Math.random() * 4) + 1); //przypisuje wart <1 a 4> do zmiennej RandomNumber
    //_unsubscribe();
    x = 0;
    y = 0;
    z = 0;
    data.x=0;
    data.y=0;
    data.z=0;
    //potem zeruje akselometer
    }
};
// {GenerateRandomNumber()}   - wywołanie cały czas gdy spełniony warunek z 52 linii
    return (
      <View style={styles.container} >
      {GenerateRandomNumber()}   
      <Text style={styles.text}>{RandomNumber}</Text>
      <View style={[{ width: "60%", margin: 10, backgroundColor: "red" }]}>
      </View>        
      </View>
    );
}
 //style
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