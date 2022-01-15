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
		
              Notes:{ }
              Możliwość zapisywania notatek z rozgrywki.{"\n"}

              Character:{ }
              W tej zakładce tworzymy naszą postać. Podajemy imię, wiek, klasę postaci oraz rasę.{"\n"}

              Enemy:{ }
              W tej zakładce znajduje się lista przeciwników.{"\n"}

              Dices:{ }
              W tej zakładce mamy dostępne kostki do losowania. Dostępne kości: d4, d6, d8, d10, d12, d20{"\n"}

              Autorzy:{ }
              Staniszewski Hubert{ }
              Skrobot Daniel{ }
              Stępień Wiktoria{ }
        
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
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
