import React, { Component, Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Fab, Icon, Box, Center, NativeBaseProvider } from "native-base"
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from "@expo/vector-icons"


export default function character({ navigation }) {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});