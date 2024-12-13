import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";

function formatNumberToText(number) {
  if (number >= 1e9) {
    return (number / 1e9).toFixed(1).replace(/\.0$/, "") + "B"; // Billion
  } else if (number >= 1e6) {
    return (number / 1e6).toFixed(1).replace(/\.0$/, "") + "M"; // Million
  } else if (number >= 1e3) {
    return (number / 1e3).toFixed(1).replace(/\.0$/, "") + "k"; // Thousand
  } else {
    return number; // Less than 1k
  }
}

export default function Card({ cardData, navigation }) {
  return (
    <TouchableOpacity
      style={style.container}
      onPress={() => navigation.navigate("Detail", {cardData})}
    >
      <View style={style.imgwrap}>
        <ImageBackground source={{ uri: cardData.image }} style={style.img}>
          <View style={style.textcontainer}>
            {cardData.delivery && (
              <Text style={style.text}>
                <MaterialCommunityIcons name="bus" color="white" size={15} />{" "}
                FREE DELIVERY
              </Text>
            )}
            {cardData.coin && (
              <Text style={style.textcoin}>
                <MaterialCommunityIcons
                  name="bitcoin"
                  color="white"
                  size={14}
                />
                COINS
              </Text>
            )}
          </View>
        </ImageBackground>
      </View>
      <View style={style.contentcontainer}>
        <View>
          <Text style={style.tittle} numberOfLines={1} ellipsizeMode="tail">
            {cardData.title}
          </Text>
        </View>

        <View style={style.pricecontainer}>
          <Text style={style.price}>Rs.{cardData.price}</Text>
          <Text style={style.discount}>{cardData.discount}%</Text>
        </View>
        <View style={style.coincontainer}>
          {cardData.coin && (
            <Text style={style.coinsaving}>
              Coins save Rs.{cardData.coinsaving}
            </Text>
          )}
        </View>
        <View style={style.ratingcontainer}>
          <FontAwesome name="star" color="gold" />
          <Text style={{ fontSize: 12 }}>{cardData.rating}</Text>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text style={{ fontSize: 12 }}>({cardData.views}) |</Text>
            <Text style={{ fontSize: 12 }}>{formatNumberToText(cardData.sold)} sold</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 15,
    margin: 10,
    width: 150,
  },
  img: {
    height: 150,
    width: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  contentcontainer: {
    padding: 5,
  },
  textcontainer: {
    flexDirection: "row",
    position: "absolute", // Position the container absolutely
    bottom: 0, // Move it 10 units from the bottom
    left: 0, // Move it 10 units from the right
  },
  text: {
    fontSize: 8,
    color: "white",
    fontWeight: "bold",
    borderRadius: 0,
    backgroundColor: "#007C64",
    padding: 5,
  },
  textcoin: {
    fontSize: 8,
    color: "white",
    fontWeight: "bold",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: "#F59509",
    padding: 5,
  },
  tittle: {
    fontSize: 15,
  },
  pricecontainer: {
    flexDirection: "row",
    gap: 5,
    padding: 3,
  },
  price: {
    fontSize: 15,
    color: "red",
    fontWeight: "bold",
  },
  discount: {
    fontSize: 15,
    color: "red",
    backgroundColor: "#FDECEF",
    borderRadius: 5,
  },
  coincontainer: {
    alignItems: "flex-start",
    padding: 3,
  },
  coinsaving: {
    fontSize: 13,
    borderRadius: 5,
    padding: 2,
    backgroundColor: "yellow",
  },
  ratingcontainer: {
    flexDirection: "row",
    padding: 3,
    alignItems: "center",
  },
});
