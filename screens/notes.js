import React, { Component, Fragment, useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { FormControl, Input, Modal, Fab, Icon, Button, Box, Center, NativeBaseProvider, TextArea } from "native-base"
import { ScrollView } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import axios from 'axios';
import {RPG_BASE_URL} from '../DBDetails.js';

import Task from '../Components/Task';

export default function notesscr({ navigation }) {





  const [taskItems, setTaskItems] = useState([]);


  const [id, setID] = useState(0);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
 
  const [showModal, setShowModal] = useState(false)

  const [people, setPeople] = useState([])
  const [userId, setUserId] = useState(1)
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setErrorFlag] = useState(false)
  const changeUserIdHandler = () => {
    setUserId((userId) => (userId === 3 ? 1 : userId + 1))
  };

    useEffect(() => {
      const source = axios.CancelToken.source();
      const url = `https://api.jsonbin.io/b/61e53a5bba87c130e3e9b266`;
      const fetchUsers = async () => {
        try {
          setIsLoading(true);
          const response = await axios.get(url,{
            headers: {
               "secret-key": "$2b$10$KilzUaVCnErIvA.3H9YLl.WpdkoczBs1wSJvxflNOozZtj5SoHYb6",
            },
          });
          if (response.status === 200) {
            console.log("HERE");
            setUser(response.data.data);
            setIsLoading(false);
            return;
          } else {
            throw new Error("Failed to fetch users");
          }
        } catch (error) {
          if(axios.isCancel(error)){
            console.log('Data fetching cancelled');
          }else{
            setErrorFlag(true);
            setIsLoading(false);
          }
        }
      };
      fetchUsers();
      return () => source.cancel("Data fetching cancelled");
    }, [userId]);
  
  const [task, setTask] = useState(
  { 
    title: ' ',
  }
  );


  const handleAddTask = () => {
    //Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    //setTask(null);
  }


  const hook = () => {
    axios.get(RPG_BASE_URL + '/notes')
      .then(response => {
        var data = response.data;
        data.forEach(e => {
          console.log(`${e.id}, ${e.title}, ${e.content}`);
        });
      })
  }

  useEffect(hook, [])
  //console.log('render', people.length, 'people');

 // console.log('render', people.length, 'people');
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


  //console.log(content);
  //console.log(title);
  //console.log(people);
  //console.log(people.length);
  console.log(title);
  console.log(content);
  console.log(task);
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
                  <TouchableOpacity key={index} onPress={() => completeTask(index)}>
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
                    <Input placeholder="Title" onChangeText={message => setTask(message)} />
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
                        setShowModal(false)
                        handleAddTask()
                        
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
  addText: {},
});