import React, {Component, Fragment} from 'react';
import { StyleSheet, View, Button } from 'react-native';
import {Select, VStack, CheckIcon, TextArea, Radio, Text, Center, NativeBaseProvider} from "native-base"

///charctercreate przyjmuje parametr nawigacje
export default function charactercreate({navigation}) {
  const [value, setValue] = React.useState("one") //
  let [service, setService] = React.useState("") //let może być zmieniana dzięki operatorowi =, 
                                                //a const nie może trzeba zmienić przy pomocy funkcji  
  return (
    <NativeBaseProvider>
      <Center>
        <Text>Character Name</Text>
       <TextArea
          h={10}
          placeholder="Name"
          w={{
            base: "70%",
            md: "20%",
          }}
        />
        <Text>Choose Race</Text>
        <VStack alignItems="center" space={4}>
          <Select
            selectedValue={service}
            minWidth="70%"
            accessibilityLabel="Choose Race"
            placeholder="Choose race"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="Human" value="hum" />
            <Select.Item label="Elf" value="elf" />
            <Select.Item label="Dwarf" value="dwar" />
          </Select>
        </VStack>
        <Text>Choose Sex</Text>
        <Radio.Group
          name="Sex"
          accessibilityLabel="Character Sex"
          value={value}
          onChange={(nextValue) => {
            setValue(nextValue)
          }}
        >
          <Radio value="Male" my={1}>
            Male
          </Radio>
          <Radio value="Female" my={1}>
            Female
          </Radio>
          <Radio value="Yes" my={1}>
            Yes Please
          </Radio>
      </Radio.Group>
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
