import React, { Component, Fragment, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormControl, Input, Modal, Fab, Icon, Button, Box, Center, NativeBaseProvider, TextArea } from "native-base"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import axios from 'axios';
import {RPG_BASE_URL} from '../DBDetails.js';

export default function notesscr({ navigation }) {


  const [id, setID] = useState(0);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
 
  const [showModal, setShowModal] = useState(false)

  const [people, setPeople] = useState([])

  /*
  const hook = () => {
    axios.get(RPG_BASE_URL+'/notes')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        setPeople(response.data)
      });
  }

  */
  //useEffect(hook, [])

  /*
  axios.post(RPG_BASE_URL + '/notes', {
    firstName: '',
    lastName: ''
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  console.log('render', people.length, 'people');
  */
  console.log(value.title);
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Box h={400} w="100%">
          <Fab
            borderRadius="full"
            colorScheme="indigo"
            placement="bottom-right"
            onPress={() => setShowModal(true)}
            icon={
              <Icon
                color="white"
                as={<MaterialCommunityIcons name="file-plus-outline" />}
                size="4"
              />
            }
            label="New note"
          />
        </Box>
      </Center>

      <Center flex={1} px="3">
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>New note</Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label>Title</FormControl.Label>
                <Input onChangeText={(text) => handleChange({ type: `title`, text })}
                  value={value.title} placeholder="Title"/>
              </FormControl>
              <FormControl mt="1">
                <FormControl.Label>Note Content</FormControl.Label>
                <TextArea placeholder="Note"></TextArea>
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={1}>
                <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => {
                    setShowModal(false)
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onPress={() => {
                    setShowModal(false)
                    
                  }}
                >
                  Save
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
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
