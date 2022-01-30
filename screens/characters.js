import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Fab, Icon, Box, Center, NativeBaseProvider } from "native-base"
import { AntDesign } from "@expo/vector-icons"

// funkcja charakter przyjmuje nawigacje
export default function character({ navigation }) {
  //box -plusik
  return (
    <NativeBaseProvider>
      <Box position="relative" h={100} w="100%"> 
        <Fab
          position="absolute"
          size="sm"
          icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
          onPress={() => navigation.navigate('CharC')}
        />
      </Box>
    </NativeBaseProvider>
  );
}
//style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});