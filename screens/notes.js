import React, { Component, Fragment, useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { FormControl, Input, Modal, Fab, Icon, Button, Box, Center, NativeBaseProvider, TextArea } from "native-base"
import { ScrollView } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import axios from 'axios';
import { RPG_BASE_URL } from '../DBDetails.js';

import Task from '../Components/Task';

export default function notesscr({ navigation }) {

  const [id, setID] = useState(0);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const [showNote, setShowNote] = useState(false)


  const [showModal, setShowModal] = useState(false)

  const [taskItems, setTaskItems] = useState([]);

  const [itemContent, setItemContent] = useState({ id, title, content });


 // METODA PUT
 // NAVIGACJE
  const checkItem = (item) => {
    setItemContent(item);
    setShowNote(true)
  }
  const handleAddTask = () => {
    setTaskItems([...taskItems, {id, title, content}])
    postData();
    setTitle(null);
  }
  const getData = () => {
    axios.get(RPG_BASE_URL + '/notes')
      .then(function (response) {
        setTaskItems(response.data)
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      
  }


  const postData = () => {
    axios.post(RPG_BASE_URL + '/notes', {
      id: id,
      title: title,
      content: content
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(
    () => {
      getData()
    }
    , [])

  return (




    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Notes</Text>
          <View style={styles.items}>
            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => checkItem(item)}>
                    <Task text={item} />
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>

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
                    <Input placeholder="Title" onChangeText={message => setTitle(message)} />
                  </FormControl>
                  <FormControl mt="1">
                    <FormControl.Label>Note Content</FormControl.Label>
                    <TextArea placeholder="Note" onChangeText={message => setContent(message)}></TextArea>
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
                        handleAddTask()
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

          <Center flex={1} px="3">
            <Modal isOpen={showNote} onClose={() => setShowNote(false)}>
              <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header><Text style={styles.itemText}>{itemContent.title}</Text></Modal.Header>
                <Modal.Body>
                  <Text style={styles.itemText}>{itemContent.content}</Text>
                </Modal.Body>
              </Modal.Content>
            </Modal>
          </Center>
        </NativeBaseProvider>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  itemText: {
    maxWidth: '80%',
  },
  addText: {},
});