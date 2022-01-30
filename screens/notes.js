import React, { Component, Fragment, useState, useEffect } from 'react';// importuje komponenty
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Menu, FormControl, Input, Modal, Button, Center, NativeBaseProvider, TextArea } from "native-base"
import { ScrollView } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import axios from 'axios'; // do polaczenia z baza danych
import { RPG_BASE_URL } from '../DBDetails.js';

import Task from '../Components/Task'; // importuje taski->>>>>> nasze notatki
//głowna funkcja notatek
export default function notesscr({ navigation }) {

  const [id, setID] = useState(0); //id notatki
  const [title, setTitle] = useState();// tytul notatki
  const [content, setContent] = useState();//zawartosc notatki

  const [showNote, setShowNote] = useState(false) // ustawia czy pokazac notatke
  const [showNoteEdit, setShowNoteEdit] = useState(false)// ustawia czy pokozac notatke do edycji czy nie

  const [currentIndex, setCurrentIndex] = useState(0); //aktualny indeks notatki
  const [showModal, setShowModal] = useState(false) //ustawia czy pokzac modal

  const [taskItems, setTaskItems] = useState([]);//ustawia  wszystkie notatki

  const [itemContent, setItemContent] = useState({ id, title, content });// ustawia nam kontent notatki jednej

  const [shouldOverlapWithTrigger] = React.useState(false)
  const [position, setPosition] = React.useState("auto")

/*
funkcja ktora ustawia kontent/ zawartosc notatki 

*/
  const checkItem = (item) => {
    setItemContent(item);
    setShowNote(true)
  }
  //dodaje jedna notatke
  const handleAddTask = () => {
    setTaskItems([...taskItems, { id, title, content }])
    postData();
    setTitle(null);
  }
  //pobiera notatki z bazy danych przy użyciu axiosa
  const getData = async () => {
    try {

      const response = await axios.get(RPG_BASE_URL + '/notes')

      console.log(response.data)
      setTaskItems(response.data)
    } catch (error) {
      console.error(error)
    }
  }

//dodaje   przy użyciu axiosa notatke 
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
//aktualizuje notatke po identyfikatorze
  const putData = (index) => {
    axios.put(RPG_BASE_URL + '/notes/' + index, {
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
    getData()
  }

//.usuwa notatke po id
  const removeData = (index) => {
    axios.delete(RPG_BASE_URL + '/notes/' + index)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    getData();
  }
//wywola sie raz przy wejsciu do ekranu i pobiera baze danych
  useEffect(
    () => {
      getData()
    }
    , [])

  {
    //wywołują się notatki  i się rysują
   // taskItems && taskItems.map((item, index)  ---- wyswietla wszystkkie notatki
    //<TouchableOpacity key={index} onPress={() => checkItem(item)}>----po dotknieciu wyswietla sie bo wywoluje komponent task
  }
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
              taskItems && taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => checkItem(item)}>
                    <Task text={item} />
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>
{
  //po wcisnieciu pojawia sie menu notatki gdzie mozna wybrac opcje dodania lub edycji 
}
        <NativeBaseProvider>
          <Menu
            w="100"
            shouldOverlapWithTrigger={shouldOverlapWithTrigger} // @ts-ignore
            placement={position == "auto" ? undefined : position}
            trigger={(triggerProps) => {
              return (
                <Button alignSelf="center" variant="solid" {...triggerProps} style={styles.NoteButton}>
                  Note Menu
                </Button>
              )
            }}
          >
            <Menu.Item alignItems={"center"} onPress={() => setShowModal(true)}>Add</Menu.Item>
            <Menu.Item alignItems={"center"} onPress={() => setShowNoteEdit(true)}>Edit</Menu.Item>
          </Menu>
{
  //otwieranie notatki gdzie mozna wpisac tytuł i tresc notatki
  //są tu przyciski zapisz i przerwij
}
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

{
  //po wcisnieciu edycji mozna edytpowac notatke 
// zmiana tytulu, tresci , zapisania, cofnac i usunąć
}
          <Center flex={1} px="3">
            <Modal isOpen={showNoteEdit} onClose={() => setShowNoteEdit(false)}>
              <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Edit note</Modal.Header>
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
                        setShowNoteEdit(false)
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="ghost"
                      colorScheme="blueGray"
                      onPress={() => {
                        removeData(itemContent.id)
                        setShowNoteEdit(false)
                      }}
                    >
                      Delete
                    </Button>
                    <Button
                      onPress={() => {
                        putData(itemContent.id);
                        setShowNoteEdit(false)
                      }}
                    >
                      Save
                    </Button>
                  </Button.Group>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
          </Center>

{
// pokazywanie notatki po wcisnieciu
}
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


//style

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
  NoteButton: {
    borderRadius: 20
  },
  addText: {},
});