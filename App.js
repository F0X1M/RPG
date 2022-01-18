import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeBaseProvider } from 'native-base';

import HomeScreen from './screens/home';
import DicesScreen from './screens/dices';
import HelpScreen from './screens/help';
import NotesScreen from './screens/notes';
import CharScreen from './screens/characters';
import CharCScreen from './screens/charactercreate';
import EnemyScreen from './screens/enemies';
import roll4 from './screens/roll4';
import roll6 from './screens/roll6';
import roll8 from './screens/roll8';
import roll10 from './screens/roll10';
import roll12 from './screens/roll12';
import roll20 from './screens/roll20';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='DicesScreen' component={DicesScreen} options={{
				tabBarLabel: '',
				tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="dice-multiple" color={color} size={35} />),
      }}/>
      <Tab.Screen name='NotesScreen' component={NotesScreen} options={{
				tabBarLabel: '',
				tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="notebook-outline" color={color} size={35} />),
			}}/>
      <Tab.Screen name='CharScreen' component={CharScreen} options={{
				tabBarLabel: '',
				tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account-group" color={color} size={35} />),
			}}/>
    </Tab.Navigator>
  );
}

function Tabs2() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='NotesScreen' component={NotesScreen} options={{
				tabBarLabel: '',
				tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="notebook-outline" color={color} size={35} />),
			}}/>
      <Tab.Screen name='DicesScreen' component={DicesScreen} options={{
				tabBarLabel: '',
				tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="dice-multiple" color={color} size={35} />),
      }}/>
      <Tab.Screen name='CharScreen' component={CharScreen} options={{
				tabBarLabel: '',
				tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account-group" color={color} size={35} />),
			}}/>
    </Tab.Navigator>
  );
}

function Tabs3() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='CharScreen' component={CharScreen} options={{
				tabBarLabel: '',
				tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account-group" color={color} size={35} />),
			}}/>
      <Tab.Screen name='DicesScreen' component={DicesScreen} options={{
				tabBarLabel: '',
				tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="dice-multiple" color={color} size={35} />),
      }}/>
      <Tab.Screen name='NotesScreen' component={NotesScreen} options={{
				tabBarLabel: '',
				tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="notebook-outline" color={color} size={35} />),
			}}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
  <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home" >
          <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="DicesS" component={Tabs} options={{ headerShown: false }}/>
          <Stack.Screen name="HelpScr" component={HelpScreen} />
          <Stack.Screen name="NotesScr" component={Tabs2} options={{ headerShown: false }}/>
          <Stack.Screen name="Character" component={Tabs3} options={{ headerShown: false }}/>
          <Stack.Screen name="CharC" component={CharCScreen} />
          <Stack.Screen name="Enemy" component={EnemyScreen} />
          <Stack.Screen name="roll4" component={roll4} />
          <Stack.Screen name="roll6" component={roll6} />
          <Stack.Screen name="roll8" component={roll8} />
          <Stack.Screen name="roll10" component={roll10} />
          <Stack.Screen name="roll12" component={roll12} />
          <Stack.Screen name="roll20" component={roll20} />
        </Stack.Navigator> 
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
