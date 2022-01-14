import React, {Component, Fragment, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="notebook-outline" />

export default function notesscr({navigation}) {
  const [title, setTitle] = useState("Jakis tekst");
  return (
    <Card>
      <Card.Title title="Note Title" subtitle="Note Subtitle" left={LeftContent} />
        <Card.Content>
          <Title>{title}</Title>
          <Paragraph>Note content</Paragraph>
        </Card.Content>
      <Card.Actions>
        <Button onPress={()=>setTitle("narazie")}>Edit</Button>
        <Button>Delete</Button>
      </Card.Actions>
    </Card>
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
