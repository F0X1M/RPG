import React, { Component, Fragment, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormControl, Input, Modal, Fab, Icon, Button, Box, Center, NativeBaseProvider, TextArea } from "native-base"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import axios from 'axios';

export default function notesscr({ navigation }) {
  
  const [showModal, setShowModal] = useState(false)

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
                <Input placeholder="Title"/>
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
