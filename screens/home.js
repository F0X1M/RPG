import React, {Component, Fragment} from 'react';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Image, TouchableOpacity, Button } from 'react-native';
import {
  Box,
  useDisclose,
  IconButton,
  Stagger,
  HStack,
  Icon,
  Center,
  NativeBaseProvider,
  ZStack,
} from "native-base"
import { MaterialCommunityIcons} from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';



export default function home({navigation}) {
    const { isOpen, onToggle } = useDisclose()
  return (
    <NativeBaseProvider>
        <View style = {styles.container}>
      <Box>
        <Box alignItems="center" minH="280">
          <Stagger
            visible={isOpen}
            initial={{
              opacity: 0,
              scale: 0,
              translateY: 34,
            }}
            animate={{
              translateY: 0,
              scale: 1,
              opacity: 1,
              transition: {
                type: "timing",
                mass: 0.8,
                stagger: {
                  offset: 30,
                  reverse: false,
                },
              },
            }}
            exit={{
              translateY: 34,
              scale: 0.5,
              opacity: 0,
              transition: {
                type: "spring",
                duration: 100,
                stagger: {
                  offset: 30,
                  reverse: false,
                },
              },
            }}
          >
          <View style={styles.iconBox}>
            <IconButton
              mb="4"
              variant="solid"
              bg="purple.500"
              colorScheme="purple"
              borderRadius="full"
              onPress = {()=>navigation.navigate('NotesScr')}
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  size="6"
                  name="notebook-outline"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="warmGray.50"
                />
              }
            /><Text style={styles.ButtonText}>text</Text>
          </View>
          <View style={styles.iconBox}>
            <IconButton
              mb="4"
              variant="solid"
              bg="indigo.500"
              colorScheme="indigo"
              borderRadius="full"
              onPress = {()=>navigation.navigate('Character')}
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  _dark={{
                    color: "warmGray.50",
                  }}
                  size="6"
                  name="account-group"
                  color="warmGray.50"
                />
              }
            /><Text style={styles.ButtonText}>text</Text>
          </View>
          <View style={styles.iconBox}>
            <IconButton
              mb="4"
              variant="solid"
              bg="yellow.500"
              colorScheme="yellow"
              borderRadius="full"
              onPress = {()=>navigation.navigate('Enemy')}
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  _dark={{
                    color: "warmGray.50",
                  }}
                  size="6"
                  name="spider"
                  color="warmGray.50"
                />
              }
            /><Text style={styles.ButtonText}>text</Text>
          </View>
          <View style={styles.iconBox}>
            <IconButton
              mb="4"
              variant="solid"
              bg="teal.500"
              colorScheme="teal"
              borderRadius="full"
              onPress = {()=>navigation.navigate('DicesS')}
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  size="6"
                  name="dice-multiple"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="warmGray.50"
                />
              }
            /><Text style={styles.ButtonText}>text</Text>
          </View>
          <View style={styles.iconBox}>
            <IconButton
              mb="4"
              variant="solid"
              bg="red.500"
              colorScheme="red"
              borderRadius="full"
              onPress = {()=>navigation.navigate('HelpScr')}
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  size="6"
                  name="cloud-question"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="warmGray.50"
                />
              }
            /><Text style={styles.ButtonText}>text</Text>
          </View>
          </Stagger>
        </Box>
        <HStack alignItems="center">
          <IconButton
            variant="solid"
            borderRadius="full"
            size="lg"
            onPress={onToggle}
            bg="cyan.400"
            icon={
              <Icon
                as={MaterialCommunityIcons}
                size="6"
                name="dots-horizontal"
                color="cyan"
                _dark={{
                  color: "cyan",
                }}
              />
            }
          />
        </HStack>
      </Box>
        </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBox:{
    flexDirection: "row",
    justifyContent: "space-around",
  },
  ButtonText:{
    paddingTop: '15%',
    paddingLeft: 5,
    fontSize: 15,
  }
});
