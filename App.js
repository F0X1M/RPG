import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from './screens/home';
import DicesScreen from './screens/dices';
import SecondScreen from './screens/secondS';
import NotesScreen from './screens/notes';
import CharScreen from './screens/characters';
import CharCScreen from './screens/charactercreate';
import EnemyScreen from './screens/enemies';
import EnemyCScreen from './screens/enemycreate';
import roll4 from './screens/roll4';
import roll6 from './screens/roll6';
import roll8 from './screens/roll8';
import roll10 from './screens/roll10';
import roll12 from './screens/roll12';
import roll20 from './screens/roll20';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" >
        <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="DicesS" component={DicesScreen} />
        <Stack.Screen name="SecondS" component={SecondScreen} />
        <Stack.Screen name="NotesScr" component={NotesScreen} />
        <Stack.Screen name="Character" component={CharScreen} />
        <Stack.Screen name="CharC" component={CharCScreen} />
        <Stack.Screen name="Enemy" component={EnemyScreen} />
        <Stack.Screen name="EnemyC" component={EnemyCScreen} />
        <Stack.Screen name="roll4" component={roll4} />
        <Stack.Screen name="roll6" component={roll6} />
        <Stack.Screen name="roll8" component={roll8} />
        <Stack.Screen name="roll10" component={roll10} />
        <Stack.Screen name="roll12" component={roll12} />
        <Stack.Screen name="roll20" component={roll20} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
  
  function Tab() {
    return (
      <Tab.Navigator
          screenOptions={{
          headerShown:false, 
          tabBarActiveTintColor: '#3040B3',
          }}
        >
        <Tab.Screen name="DicesS" component={DicesScreen} options={{
                  tabBarLabel: 'Dice',
                  tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="dice-multiple" color={color} size={size} />),
              }}
          />
        <Tab.Screen name="NotesScr" component={NotesScreen} options={{
                  tabBarLabel: 'Notes',
                  tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="note-multiple" color={color} size={size} />),
              }}/>
        <Tab.Screen name="SecondS" component={SecondScreen} options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="cards" color={color} size={size} />),
              }}
          />
        <Tab.Screen name="Character" component={CharScreen} options={{
                  tabBarLabel: 'Chat',
                  tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="chat" color={color} size={size} />),
              }}/>
        <Tab.Screen name="CharC" component={CharCScreen} options={{
                  tabBarLabel: 'Profile',
                  tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account" color={color} size={size} />),
              }}/>
         <Tab.Screen name="Enemy" component={EnemyScreen} options={{
                  tabBarLabel: 'Profile',
                  tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account" color={color} size={size} />),
              }}/>
          <Tab.Screen name="EnemyC" component={EnemyCScreen} options={{
                  tabBarLabel: 'Profile',
                  tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account" color={color} size={size} />),
              }}/>
      </Tab.Navigator>
    );
  }
  }
