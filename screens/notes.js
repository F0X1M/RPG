import React, {Component, Fragment} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

export default function notesscr({navigation}) {
  return (
    <View style = {styles.container}>
        <Button title = "Second screen" onPress = {()=>navigation.navigate('SecondS')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
