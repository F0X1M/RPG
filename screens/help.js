import React, {Component, Fragment} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AlertDialog, Center, NativeBaseProvider } from "native-base"

export default function help({navigation}) {
  
  const [isOpen, setIsOpen] = React.useState(true)
  const onClose = () => setIsOpen(false)
  const cancelRef = React.useRef(null)
  
  return (
  <NativeBaseProvider>
    <Center>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose, ()=> navigation.navigate('home')}
      >
		  <AlertDialog.Content>
			<AlertDialog.CloseButton />
			<AlertDialog.Header>Help</AlertDialog.Header>
      <AlertDialog.Body>
		
              Notes: 
              Możliwość zapisywania notatek z rozgrywki.

              Character:
              W tej zakładce tworzymy naszą postać, w pierwszej kolejności należy podać imię. Kolejnym etapem jest wybranie rasy. Użytkownik do wyboru ma trzy klasy postaci człowiek, elf i krasnolud. Na końcu wybieramy płeć.

              Enemy:
              W tej zakładce znajduje się lista wrogo nastawionych do nas jednostek wraz z opisem ich roli.

              Dices:
              W tej zakładce mamy dostępne kostki RPG. Wybieramy kość, która jest nam potrzebna podczas rozgrywki, następnie w celu wylosowania liczby wybieramy przycisk "Losuj kością".
              W zestawieniu znajdują się kości: d4, d6, d8, d10, d12, d20

              Autorzy:
              Staniszewski Hubert
              Skrobot Daniel
              Stępień Wiktoria
        
			</AlertDialog.Body>
		  </AlertDialog.Content>
		</AlertDialog>
	  </Center>
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
