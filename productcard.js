import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Card({CardData}) {
    return (
      <View style={style.container}>
        <View style={style.imgwrap}>
          <ImageBackground source={{ uri: CardData.image }} style={style.img}>
            <View style={style.textcontainer}>
              {CardData.delivery && (
                <Text style={style.text}>
                  <MaterialCommunityIcons name="bus" color="white" size={15} />{" "}
                  FREE DELIVERY
                </Text>
              )}
              {CardData.coin && (
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
              {CardData.title}
            </Text>
          </View>
  
          <View style={style.pricecontainer}>
            <Text style={style.price}>Rs.{CardData.price}</Text>
            <Text style={style.discount}>{CardData.discount}%</Text>
          </View>
          <View style={style.coincontainer}>
            <Text style={style.coinsaving}>
              Coins save Rs.{CardData.coinsaving}
            </Text>
          </View>
          <View style={style.ratingcontainer}>
            <FontAwesome name="star" color="gold" />
            <Text style={{ fontSize: 12 }}>{CardData.rating}</Text>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={{ fontSize: 12 }}>({CardData.views}) |</Text>
              <Text style={{ fontSize: 12 }}>{CardData.soldtext}k sold</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
  
  const style = StyleSheet.create({
    container: {
      backgroundColor: "white",
      borderRadius: 10,
      elevation: 15,
      marginTop: 50,
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