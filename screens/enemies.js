import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { AlertDialog, Flex, Divider, Button, Center, NativeBaseProvider } from "native-base"
import { useNavigation } from "@react-navigation/core";

export default function enemies({ navigation }) {
	const [isOpen, setIsOpen] = React.useState(false)
	const [isOpen2, setIsOpen2] = React.useState(false)
	const [isOpen3, setIsOpen3] = React.useState(false)
	const [isOpen4, setIsOpen4] = React.useState(false)

	const onClose = () => setIsOpen(false)
	const onClose2 = () => setIsOpen2(false)
	const onClose3 = () => setIsOpen3(false)
	const onClose4 = () => setIsOpen4(false)


	const cancelRef = React.useRef(null)
	const cancelRef2 = React.useRef(null)
	const cancelRef3 = React.useRef(null)
	const cancelRef4 = React.useRef(null)
	return (
		<NativeBaseProvider>
			<ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: 'grey' }}>
				<View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: "row" }}>
					<TouchableOpacity style={{ position: "relative", padding: 10 }} onPress={() => setIsOpen(!isOpen)} >
						<Image
							style={{
								backgroundColor: "#BBB",
								width: 175,
								height: 175,
								borderRadius: 15,
							}}
							source={require("../assets/monsters/goblin.png")}
						/>
					</TouchableOpacity>

					<TouchableOpacity style={{ position: "relative", padding: 10 }} onPress={() => setIsOpen2(!isOpen2)} >
						<Image
							style={{
								backgroundColor: "#BBB",
								width: 175,
								height: 175,
								borderRadius: 15,
							}}
							source={require("../assets/monsters/orc.png")}
						/>
					</TouchableOpacity>
				</View>
				<View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: "row" }}>
					<TouchableOpacity style={{ position: "relative", padding: 10 }} onPress={() => setIsOpen3(!isOpen3)} >
						<Image
							style={{
								backgroundColor: "#BBB",
								width: 175,
								height: 175,
								borderRadius: 15,
							}}
							source={require("../assets/monsters/gigant.png")}
						/>
					</TouchableOpacity>

					<TouchableOpacity style={{ position: "relative", padding: 10 }} onPress={() => setIsOpen4(!isOpen4)} >
						<Image
							style={{
								backgroundColor: "#BBB",
								width: 175,
								height: 175,
								borderRadius: 15,
							}}
							source={require("../assets/monsters/dragon.png")}
						/>
					</TouchableOpacity>
				</View>
			</ScrollView>
			<Center>
				<AlertDialog
					leastDestructiveRef={cancelRef}
					isOpen={isOpen}
					onClose={onClose}
				>
					<AlertDialog.Content>
						<AlertDialog.CloseButton />
						<AlertDialog.Header>Goblin</AlertDialog.Header>
						<AlertDialog.Body>
							<Flex direction="row" justifyContent='space-between'>
								<Text>Siła</Text>
								<Text>10</Text>
							</Flex>
							<Divider thickness="2" mx='1' bg='black' />
							<Flex direction="row" justifyContent='space-between'>
								<Text>Zręczność</Text>
								<Text>8</Text>
							</Flex>
							<Divider thickness="2" mx='1' bg='black' />
							<Flex direction="row" justifyContent='space-between'>
								<Text>Kondycja</Text>
								<Text>14</Text>
							</Flex>
							<Divider thickness="2" mx='1' bg='black' />
							<Flex direction="row" justifyContent='space-between'>
								<Text>Inteligencja</Text>
								<Text>10</Text>
							</Flex>
							<Divider thickness="2" mx='1' bg='black' />
							<Flex direction="row" justifyContent='space-between'>
								<Text>Mądrość</Text>
								<Text>8</Text>
							</Flex>
							<Divider thickness="2" mx='1' bg='black' />
							<Flex direction="row" justifyContent='space-between'>
								<Text>Charysma</Text>
								<Text>8</Text>
							</Flex>
							<Divider thickness="2" mx='1' bg='black' />
						</AlertDialog.Body>
					</AlertDialog.Content>
				</AlertDialog>
			</Center>

			<Center>
				<AlertDialog
					leastDestructiveRef={cancelRef2}
					isOpen={isOpen2}
					onClose={onClose2}
				>
					<AlertDialog.Content>
						<AlertDialog.CloseButton />
						<AlertDialog.Header>Orc</AlertDialog.Header>
						<AlertDialog.Body>
							<Flex direction="row" justifyContent='space-between'>
								<Text>Siła</Text>
								<Text>16</Text>
							</Flex>
							<Divider thickness="2" mx='1' bg='black' />
							<Flex direction="row" justifyContent='space-between'>
								<Text>Zręczność</Text>
								<Text>12</Text>
							</Flex>
							<Divider thickness="2" mx='1' bg='black' />
							<Flex direction="row" justifyContent='space-between'>
								<Text>Kondycja</Text>
								<Text>16</Text>
							</Flex>
							<Divider thickness="2" mx='1' bg='black' />
							<Flex direction="row" justifyContent='space-between'>
								<Text>Inteligencja</Text>
								<Text>7</Text>
							</Flex>
							<Divider thickness="2" mx='1' bg='black' />
							<Flex direction="row" justifyContent='space-between'>
								<Text>Mądrość</Text>
								<Text>11</Text>
							</Flex>
							<Divider thickness="2" mx='1' bg='black' />
							<Flex direction="row" justifyContent='space-between'>
								<Text>Charysma</Text>
								<Text>10</Text>
							</Flex>
							<Divider thickness="2" mx='1' bg='black' />
						</AlertDialog.Body>
					</AlertDialog.Content>
				</AlertDialog>
			</Center>

			<Center>
				<AlertDialog
					leastDestructiveRef={cancelRef3}
					isOpen={isOpen3}
					onClose={onClose3}
				>
					<AlertDialog.Content>
						<AlertDialog.CloseButton />
						<AlertDialog.Header>Fire Gigant</AlertDialog.Header>
						<AlertDialog.Body>
							<Flex direction="row" justifyContent='space-between'>
								<Text>Siła</Text>
								<Text>25</Text>
							</Flex>
							<Divider thickness="2" mx='1' bg='black' />
							<Flex direction="row" justifyContent='space-between'>
								<Text>Zręczność</Text>
								<Text>9</Text>
							</Flex>
							<Divider thickness="2" mx='1' bg='black' />
							<Flex direction="row" justifyContent='space-between'>
								<Text>Kondycja</Text>
								<Text>23</Text>
							</Flex>
							<Divider thickness="2" mx='1' bg='black' />
							<Flex direction="row" justifyContent='space-between'>
								<Text>Inteligencja</Text>
								<Text>10</Text>
							</Flex>
							<Divider thickness="2" mx='1' bg='black' />
							<Flex direction="row" justifyContent='space-between'>
								<Text>Mądrość</Text>
								<Text>14</Text>
							</Flex>
							<Divider thickness="2" mx='1' bg='black' />
							<Flex direction="row" justifyContent='space-between'>
								<Text>Charysma</Text>
								<Text>13</Text>
							</Flex>
							<Divider thickness="2" mx='1' bg='black' />
						</AlertDialog.Body>
					</AlertDialog.Content>
				</AlertDialog>
			</Center>

			<Center>
				<AlertDialog
					leastDestructiveRef={cancelRef4}
					isOpen={isOpen4}
					onClose={onClose4}
				>
					<AlertDialog.Content>
						<AlertDialog.CloseButton />
						<AlertDialog.Header>Adult Red Dragon</AlertDialog.Header>
						<AlertDialog.Body>
							<Flex direction="row" justifyContent='space-between'>
								<Text>Siła</Text>
								<Text>27</Text>
							</Flex>
							<Divider thickness="2" mx='1' bg='black' />
							<Flex direction="row" justifyContent='space-between'>
								<Text>Zręczność</Text>
								<Text>10</Text>
							</Flex>
							<Divider thickness="2" mx='1' bg='black' />
							<Flex direction="row" justifyContent='space-between'>
								<Text>Kondycja</Text>
								<Text>25</Text>
							</Flex>
							<Divider thickness="2" mx='1' bg='black' />
							<Flex direction="row" justifyContent='space-between'>
								<Text>Inteligencja</Text>
								<Text>16</Text>
							</Flex>
							<Divider thickness="2" mx='1' bg='black' />
							<Flex direction="row" justifyContent='space-between'>
								<Text>Mądrość</Text>
								<Text>13</Text>
							</Flex>
							<Divider thickness="2" mx='1' bg='black' />
							<Flex direction="row" justifyContent='space-between'>
								<Text>Charysma</Text>
								<Text>21</Text>
							</Flex>
							<Divider thickness="2" mx='1' bg='black' />
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
		backgroundColor: '#ccc',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
