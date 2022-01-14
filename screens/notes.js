import React, { Component, Fragment, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AlertDialog, Modal, Fab, Icon, Button, Box, Center, NativeBaseProvider } from "native-base"
import { MaterialCommunityIcons } from "@expo/vector-icons"

function addNotes() {

}

export default function notesscr({ navigation }) {

  const [isOpen, setIsOpen] = React.useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = React.useRef(null)

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Box h={400} w="100%">
          <Fab
            borderRadius="full"
            colorScheme="indigo"
            placement="bottom-right"
            onPress={() => setIsOpen(!isOpen)}
            icon={
              <Icon
                color="white"
                as={<MaterialCommunityIcons name="file-plus-outline" />}
                size="4"
              />
            }
            label="Add note"
          />
        </Box>
      </Center>

      <Center>
        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>Goblin</AlertDialog.Header>
            <AlertDialog.Body>
              This will remove all data relating to Alex. This action cannot be
              reversed. Deleted data can not be recovered.
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
