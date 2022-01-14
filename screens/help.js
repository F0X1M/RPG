import React, {Component, Fragment} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AlertDialog, Button, Center, NativeBaseProvider } from "native-base"

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
			  {/* Tutaj wiki wpisujesz tekst który wymyśliłas */}
        .
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
