import * as React from 'react'; //importuje biblioteki react
import { NavigationContainer } from '@react-navigation/native';//importuje biblioteki nawigacji
import { createNativeStackNavigator } from '@react-navigation/native-stack';//importuje biblioteki  nawigaxji stack (kafelki) otworzenie z boku
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';//importuje biblioteki nawigacji botto tab (na dole)
import { MaterialCommunityIcons } from "@expo/vector-icons";//importuje biblioteki ikon
import { NativeBaseProvider } from 'native-base';//importuje biblioteki  native base
import { createDrawerNavigator } from '@react-navigation/drawer';//importuje biblioteki drower (przesuwanie)

import HomeScreen from './screens/home';//importuje zawartosc home screen
import DicesScreen from './screens/dices'; //importuje zawartosc ekranu kosci screen
import HelpScreen from './screens/help';//importuje zawartosc ekran pomocy
import NotesScreen from './screens/notes'; //importuje zawartosc notatek
import CharScreen from './screens/characters'; //importuje zawartosc postaci
import CharCScreen from './screens/charactercreate';//importuje zawartosc postaci
import EnemyScreen from './screens/enemies';//importuje zawartosc przeciwnicy 
import roll4 from './screens/roll4';//importuje zawartosc kosci typ 4
import roll6 from './screens/roll6'; //importuje zawartosc kosci typ 6
import roll8 from './screens/roll8';//importuje zawartosc kosci typ 8
import roll10 from './screens/roll10';//importuje zawartosc kosci typ 10
import roll12 from './screens/roll12';//importuje zawartosc kosci typ 12
import roll20 from './screens/roll20';//importuje zawartosc kosci typ 20



const Stack = createNativeStackNavigator();//zmienna tworzenie nawigacji stack //  istnieje nawigacja typu stack
const Tab = createBottomTabNavigator(); //zmienna tworzenie nawigacji bottom tab//  istnieje nawigacja typu tab
const Drawer = createDrawerNavigator(); ///zmienna tworzenie nawigacji draver //  istnieje nawigacja typu drawer, wysuwa po boku
//gdzie  znajduje się nawigaacja wysuwana z boku
 function Draw(){ //główny ekran
   return (  // component={homescream}  nawigacja umozliwia przejscie do home screan
     <Drawer.Navigator>
       <Drawer.Screen name="Home" component={HomeScreen} /> 
       <Drawer.Screen name="Dices" component={Tabs} />
       <Drawer.Screen name="Notes" component={Tabs2} />
       <Drawer.Screen name="Character" component={Tabs3} />
       <Drawer.Screen name="Enemy" component={EnemyScreen} />
     </Drawer.Navigator>
    );
 }

 //tabs- kosci ekran na dole
function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='DicesScreen' component={DicesScreen} options={{ // przechodzenie do ekranu kosci 
				tabBarLabel: '',
				tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="dice-multiple" color={color} size={35} />), // ikona kosci kolor/rozmiar
      }}/>
      <Tab.Screen name='NotesScreen' component={NotesScreen} options={{// przechodzenie do ekranu notesu 
				tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="notebook-outline" color={color} size={35} />),// ikona nottesu kolor/rozmiar
			}}/>
      <Tab.Screen name='CharScreen' component={CharScreen} options={{// przechodzenie do ekranu postaci 
				tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account-group" color={color} size={35} />),// ikona tworzenia postaci kolor/rozmiar
			}}/>
    </Tab.Navigator>
  );
}
 //tabs- notatek ekran na dole

function Tabs2() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false}} >
      <Tab.Screen name='NotesScreen' component={NotesScreen} options={{// przechodzenie do ekranu notesu 
				tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="notebook-outline" color={color} size={35} />),// ikona notesu kolor/rozmiar
			}}/>
      <Tab.Screen name='DicesScreen' component={DicesScreen} options={{// przechodzenie do ekranu kosci 
				tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="dice-multiple" color={color} size={35} />),// ikona kosci kolor/rozmiar
      }}/>
      <Tab.Screen name='CharScreen' component={CharScreen} options={{// przechodzenie do ekranu postaci 
				tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account-group" color={color} size={35} />),// ikona postaci kolor/rozmiar
			}}/>
    </Tab.Navigator>
  );
}
//tabs- postaci ekran na dole

function Tabs3() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='CharScreen' component={CharScreen} options={{// przechodzenie do ekranu postaci 
				tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account-group" color={color} size={35} />),// ikona postaci kolor/rozmiar
			}}/>
      <Tab.Screen name='DicesScreen' component={DicesScreen} options={{// przechodzenie do ekranu kosci 
				tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="dice-multiple" color={color} size={35} />),// ikona kosci kolor/rozmiar
      }}/>
      <Tab.Screen name='NotesScreen' component={NotesScreen} options={{// przechodzenie do ekranu notesu 
				tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="notebook-outline" color={color} size={35} />),// ikona notesu kolor/rozmiar
			}}/>
    </Tab.Navigator>
  );
}
//ekran główny aplikacji
export default function App() {
  return (
    /*
      <Stack.Navigator initialRouteName="home" -<<<<<< trzy kropeczki do rozwijania
          <Stack.Screen name="home" component={Draw} options={{ headerShown: false }}/// stworzenie drowera ekran rozwijany po lewej
          <Stack.Screen name="DicesS" component={Tabs} ///// klikniesz na kosci wchodzisz do funkcji tabs
          <Stack.Screen name="HelpScr" component={HelpScreen} // klikniesz pomoc wchodzisz do ekranu pomocy 
          <Stack.Screen name="NotesScr" component={Tabs2} //// klikniesz na notes wchodzisz do funkcji tabs2
          <Stack.Screen name="Character" component={Tabs3} ///// klikniesz na postaci wchodzisz do funkcji tabs3
          <Stack.Screen name="CharC" component={CharCScreen} ///po kliknieciu w postaci... nastepnie klikasz plusik 
          <Stack.Screen name="Enemy" component={EnemyScreen}///// po kliknieciu przeciwników wchodzisz do ekranu  z przeciwnikami
          <Stack.Screen name="roll4" component={roll4} //// po kliknieciu kostki d4 wchodisz do losowania kostka d4
          <Stack.Screen name="roll6" component={roll6} //// po kliknieciu kostki d6 wchodisz do losowania kostka d6
          <Stack.Screen name="roll8" component={roll8} //// po kliknieciu kostki d8 wchodisz do losowania kostka d8
          <Stack.Screen name="roll10" component={roll10} //// po kliknieciu kostki d10 wchodisz do losowania kostka d10
          <Stack.Screen name="roll12" component={roll12} //// po kliknieciu kostki d12 wchodisz do losowania kostka d12
          <Stack.Screen name="roll20" component={roll20} //// po kliknieciu kostki d20 wchodisz do losowania kostka d20
          */
  <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home" >
          <Stack.Screen name="home" component={Draw} options={{ headerShown: false }}/>
          <Stack.Screen name="DicesS" component={Tabs} />
          <Stack.Screen name="HelpScr" component={HelpScreen} />
          <Stack.Screen name="NotesScr" component={Tabs2} />
          <Stack.Screen name="Character" component={Tabs3} />
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
