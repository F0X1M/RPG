import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

const DicesS = () => {
  const navigation = useNavigation();
  return (
  <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
	  <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor:'#ccc'}}>
		<Text style={styles.text}>
			  Wybierz kość
		</Text>

		<TouchableOpacity style={{position: "relative", marginTop: 20 }} onPress={() => navigation.navigate('roll4')} >
			<Image
			style={{
				width: 150,
				height: 150,
				borderRadius: 15,
				}}
				source={require("../assets/dice/roll4.png")}
            />
		</TouchableOpacity>
		<Text
			style={{
            position: "relative",
			color: "black",
			fontSize: 20,
			}}>
			d4
		</Text>
		<TouchableOpacity style={{ position: "relative", marginTop: 20 }} onPress={() => navigation.navigate('roll6')} >
		<Image
			style={{
			width: 150,
			height: 150,
			borderRadius: 15,
			}}
			source={require("../assets/dice/roll6.png")}
            />
		</TouchableOpacity>
		<Text
		style={{
            position: "relative",
			color: "black",
			fontSize: 20,
			}}>
			d6
		</Text>
		<TouchableOpacity style={{ position: "relative", marginTop: 20 }} onPress={() => navigation.navigate('roll8')} >
		<Image
			style={{
			width: 150,
			height: 150,
			borderRadius: 15,
			}}
			source={require("../assets/dice/roll8.png")}
            />
		</TouchableOpacity>
		<Text
			style={{
            position: "relative",
			color: "black",
			fontSize: 20,
			}}>
			d8
		</Text>
		<TouchableOpacity style={{ position: "relative", marginTop: 20 }} onPress={() => navigation.navigate('roll10')} >
		<Image
			style={{
			width: 150,
			height: 150,
			borderRadius: 15,
			}}
			source={require("../assets/dice/roll10.png")}
            />
		</TouchableOpacity>
		<Text
		style={{
        	position: "relative",
			color: "black",
			fontSize: 20,
			}}>
			d10
		</Text>
		<TouchableOpacity style={{ position: "relative", marginTop: 20 }} onPress={() => navigation.navigate('roll12')} >
		<Image
			style={{
			width: 150,
			height: 150,
			borderRadius: 15,
			}}
			source={require("../assets/dice/roll12.png")}
            />
		</TouchableOpacity>
		<Text
		style={{
        	position: "relative",
			color: "black",
			fontSize: 20,
			}}>
			d12
		</Text>
		<TouchableOpacity style={{ position: "relative", marginTop: 20 }} onPress={() => navigation.navigate('roll20')} >
		<Image
			style={{
			width: 150,
			height: 150,
			borderRadius: 15,
			}}
			source={require("../assets/dice/roll20.png")}
            />
		</TouchableOpacity>
		<Text
		style={{
        	position: "relative",
			color: "black",
			fontSize: 20,
			}}>
			d20
		</Text>
      </View>
	</ScrollView>
	);
};

const styles = StyleSheet.create({
  text: {
    position: "relative",
		backgroundColor: "#ccc",
		fontSize: 20,
		color: "black",
		fontWeight: "bold",
		textAlign: "center",
	}
});

export default DicesS;