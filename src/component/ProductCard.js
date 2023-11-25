import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from '@expo/vector-icons';
const { height, width } = Dimensions.get("screen");

const ProductCard = ({
  img,
  price,
  productName,
  handleAddToCart,
  handleNavigation,
}) => {

  const [fvrt, setFavrt] = useState(false)


  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.product}
      onPress={handleNavigation}
    >
      {/* Primary */}
      <View style={styles.imgContainer}>
        <AntDesign onPress={() => setFavrt(!fvrt)} name={fvrt?"heart":"hearto" }size={18} color={fvrt?"red":"grey" } style={{ position: "absolute", top: 12, zIndex: 999, right: 12 }} />
        <Image source={{ uri: img }} style={{ height: "65%", width: "65%" }} />
      </View>

      {/* secondary */}
      <View style={styles.nameAndprice}>
        <Text style={{ fontWeight: "600", fontSize: 15 }}>{productName}</Text>
        <Text style={{ fontWeight: "600", fontSize: 12 }}>
          RS.<Text style={{ fontWeight: "500", fontSize: 17 }}>{price}</Text>
        </Text>

        {/* BUtton */}
        <TouchableOpacity
          onPress={handleAddToCart}
          activeOpacity={0.5}
          style={styles.cartBtn}
        >
          <Text style={{ color: "#fff", fontWeight: "600", textTransform: "uppercase" }}>
            add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  product: {
    width: width / 2.2,
    height: 250,
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 10,
    elevation: 4,
  },
  imgContainer: {
    height: "55%",
    padding: 10,
    paddingRight: -3,
    justifyContent: "center",
    alignItems: "center",
  },
  nameAndprice: {
    height: "45%",
    justifyContent: "space-between",
    padding: 10,
    paddingBottom: 15,
  },
  cartBtn: {
    width: "100%",
    height: 35,
    backgroundColor: "purple",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
