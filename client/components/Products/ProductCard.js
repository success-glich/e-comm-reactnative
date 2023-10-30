import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
export default function ProductCard({ product }) {
  const navigation = useNavigation();
  //more details btn
  const handleMoreDetailBtn = (id) => {
    navigation.navigate("productDetail", { _id: id });
    console.log(id);
  };
  //ADD TO CART
  const handleAddToCart = (id) => {
    alert("added to cart");
  };
  return (
    <View>
      <View style={styles.card}>
        <Image
          source={{ uri: product?.image }}
          style={styles.cardImage}
          resizeMode="contain"
        />
        <Text style={styles.cardTitle}>{product?.title}</Text>
        <Text style={styles.cardDesc}>
          {product?.description.substring(0, 30)}...more
        </Text>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <Text
              style={styles.btnText}
              onPress={() => handleMoreDetailBtn(product?.id)}
            >
              Details
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCart} onPress={handleAddToCart}>
            <Text style={styles.btnText}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "lightgray",
    marginVertical: 5,
    marginHorizontal: 8,
    width: "80%",
    padding: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    // alignItems: "center"
  },
  cardImage: {
    height: 120,
    width: "100%",
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDesc: {
    fontSize: 10,
    textAlign: "left",
  },
  btnContainer: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#000",
    height: 20,
    width: 75,
    borderRadius: 5,
    justifyContent: "center",
  },
  btnCart: {
    backgroundColor: "orange",
    height: 20,
    width: 75,
    borderRadius: 5,
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
  },
});
