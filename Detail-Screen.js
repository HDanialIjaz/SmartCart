import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";

export default DetailScreen = ({ route, navigation }) => {
  const {
    id,
    image,
    delivery,
    coin,
    title,
    price,
    discount,
    coinsaving,
    rating,
    views,
    sold,
  } = route.params.cardData;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.row}>
          <Text style={styles.price}>Price: Rs. {price}</Text>
          <Text style={styles.discount}>{discount}% Off</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Coin Saving:</Text>
          <Text style={styles.value}>{coinsaving} Coins</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Rating:</Text>
          <Text style={styles.value}>{rating} ⭐</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Views:</Text>
          <Text style={styles.value}>{views}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Sold:</Text>
          <Text style={styles.value}>{sold}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Delivery Available:</Text>
          <Text style={styles.value}>{delivery ? "Yes" : "No"}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Coins Accepted:</Text>
          <Text style={styles.value}>{coin ? "Yes" : "No"}</Text>
        </View>

        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    padding: 16,
  },
  image: {
    width: "90%",
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  contentContainer: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#e63946",
  },
  discount: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2a9d8f",
  },
  label: {
    fontSize: 14,
    color: "#555",
  },
  value: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
});
