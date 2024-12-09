import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Card from './productcard'

const cardData = {
  image: "https://static-01.daraz.pk/p/4d10f4457555c0103cabab4f781fea18.jpg",
  delivery: true,
  coin: true,
  title: "M19 Airpods TWS (True Wireless)",
  price: "918",
  discount: "-77",
  coinsaving: "18",
  rating: " 4.5 ",
  views: "331",
  soldtext: "6.7",
};

export default function App() {
  return (
    <View>
          <Card CardData={cardData} />
          <Card CardData={cardData} />
          <Card CardData={cardData} />

    </View>
    
  );
}

