import React, { Component, Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import { Flex, Divider, Select, VStack, CheckIcon, Button, TextArea, Radio, Text, Center, NativeBaseProvider } from "native-base"

function getRandom() {
  return Math.floor(Math.random() * 10) + 1;
}


export default function charactercreate({ navigation }) {

  const [sex, setSex] = React.useState("")
  const [sstats, showStats] = React.useState(false)

  let [race, setrace] = React.useState("")
  let [clase, setclase] = React.useState("")
  let [random, setRandomNumber] = React.useState(0)

  return (
    <NativeBaseProvider>
      <Center>
        <View style={styles.chooses}>
          <Text>Wybierz rase</Text>
          <VStack style={styles.components} alignItems="center" space={4}>
            <Select
              selectedValue={race}
              minWidth="70%"
              accessibilityLabel="Choose Race"
              placeholder="Rasa"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(raceValue) => setrace(raceValue)}
            >
              <Select.Item label="Czlowiek" value="hum" />
              <Select.Item label="Elf" value="elf" />
              <Select.Item label="Krasnolud" value="dwar" />
            </Select>
          </VStack>
          <Text>Wybierz plec</Text>
          <Radio.Group style={styles.components}
            name="Sex"
            accessibilityLabel="plec"
            value={sex}
            onChange={(nextValue) => {
              setSex(nextValue)
            }}>
            <Radio value="Male" my={1}>
              Mezczyzna
            </Radio>
            <Radio value="Female" my={1}>
              Kobieta
            </Radio>
          </Radio.Group>
          <Text>Wybierz klase</Text>
          <VStack style={styles.components} alignItems="center" space={4}>
            <Select
              selectedValue={clase}
              minWidth="70%"
              accessibilityLabel="ChooseClass"
              placeholder="Klasa"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(clasValue) => setclase(clasValue)}
            >
              <Select.Item label="Wojownik" value="war" />
              <Select.Item label="Lowca" value="hun" />
              <Select.Item label="Mag" value="mag" />
            </Select>
          </VStack>
          <Button style={styles.ran}
            onPress={
              () => setRandomNumber(getRandom),
              () => showStats(!sstats)}
          >Losuj</Button>
        </View>

        {(sstats == true) && (race != "") && (clase != "") && (sex != "") && (<View >
          <Flex direction="row">
            <View style={styles.stats}>
              <Flex direction="row">
                <Text>Siła</Text>
              </Flex>
              <Divider thickness="2" mx='1' bg='black' />
              <Flex direction="row">
                <Text>Zręczność</Text>
              </Flex>
              <Divider thickness="2" mx='1' bg='black' />
              <Flex direction="row">
                <Text>Kondycja</Text>
              </Flex>
              <Divider thickness="2" mx='1' bg='black' />
              <Flex direction="row">
                <Text>Inteligencja</Text>
              </Flex>
              <Divider thickness="2" mx='1' bg='black' />
              <Flex direction="row">
                <Text>Mądrość</Text>
              </Flex>
              <Divider thickness="2" mx='1' bg='black' />
              <Flex direction="row">
                <Text>Charysma</Text>
              </Flex>
              <Divider thickness="2" mx='1' bg='black' />
            </View>

            <View style={styles.stats}>
              <Flex direction="row">
                <Text>{getRandom()}</Text>
              </Flex>
              <Divider thickness="2" mx='1' bg='black' />
              <Flex direction="row">
                <Text>{getRandom()}</Text>
              </Flex>
              <Divider thickness="2" mx='1' bg='black' />
              <Flex direction="row">
                <Text>{getRandom()}</Text>
              </Flex>
              <Divider thickness="2" mx='1' bg='black' />
              <Flex direction="row">
                <Text>{getRandom()}</Text>
              </Flex>
              <Divider thickness="2" mx='1' bg='black' />
              <Flex direction="row">
                <Text>{getRandom()}</Text>
              </Flex>
              <Divider thickness="2" mx='1' bg='black' />
              <Flex direction="row">
                <Text>{getRandom()}</Text>
              </Flex>
              <Divider thickness="2" mx='1' bg='black' />
            </View>
          </Flex>
        </View>)
        }

      </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },

  chooses: {
    top: '5%',
    padding: 20,
    borderRadius: 40,
    backgroundColor: '#ddd',
  },

  ran: {
    alignSelf: 'center',
    padding: 10,
    minWidth: 20,
    backgroundColor: '#fe2fe1',
    shadowColor: '#444',
    shadowRadius: 12,
    shadowOpacity: 10,
  },

  components: {
    paddingBottom: 5,
  },

  stats: {
    top: '20%',
    margin: '5%',
    padding: 20,
    borderRadius: 40,
    backgroundColor: '#ddd',
    alignItems: 'center',
  },
});
