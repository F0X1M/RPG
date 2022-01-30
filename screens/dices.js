import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";// impotrujesz komponent ktory potrzebny jest by uzyc stworzonej nawigacji

//funkcja kosci
const DicesS = () => {
  const navigation = useNavigation();//inicjujesz uzycie nawigacji
  return (
//scrollview widok pozwalajacy na scrolowanie, pozwala na przesuwanie dotykiem
  <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
	  <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor:'#ccc'}}>
		<Text style={styles.text}>
			  Wybierz kość
		</Text>
{
	//po kliknieciu na kostke 4 przenosi cie do ekranu losowania kostka 4
}
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
{
//po kliknieciu na kostke 6 przenosi cie do ekranu losowania kostka 6
}
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

			  {
				  //po kliknieciu na kostke 4 przenosi cie do ekranu losowania kostka 8
			  }
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

			  {
				  //po kliknieciu na kostke 4 przenosi cie do ekranu losowania kostka 10
			  }
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

			  {
				  //po kliknieciu na kostke 4 przenosi cie do ekranu losowania kostka 12
			  }
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
			  {
				  //po kliknieciu na kostke 4 przenosi cie do ekranu losowania kostka 20
				  //on press dotkniecie
				  //=> navigation.navigate('roll20')} >  przenosi do roll 20
			  }
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
//style
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