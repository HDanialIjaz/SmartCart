import { FlatList, TouchableOpacity, View, Text } from "react-native";
import Card from "./productcard";
import cardData from "./card";

export default HomeScreen = ({ navigation }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <FlatList
        data={cardData}
        renderItem={({ item }) => <Card navigation={navigation} cardData={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};