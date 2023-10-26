import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

const { height, width } = Dimensions.get("screen");

const ProductCard = ({
  img,
  price,
  productName,
  handleAddToCart,
  handleNavigation,
}) => { 
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.product}
      onPress={handleNavigation}
    >
      {/* Primary */}
      <View style={styles.imgContainer}>
        <Image source={{ uri: img }} style={{ height: "90%", width: "90%" }} />
      </View>

      {/* secondary */}
      <View style={styles.nameAndprice}>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>{productName}</Text>
        <Text style={{ fontWeight: "600", fontSize: 12 }}>
          RS.<Text style={{ fontWeight: "500", fontSize: 17}}>{price}</Text>
        </Text>

        {/* BUtton */}
        <TouchableOpacity
          onPress={handleAddToCart}
          activeOpacity={0.5}
          style={styles.cartBtn}
        >
          <Text style={{ color: "#000", fontWeight:"600", textTransform: "uppercase" }}>
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
    height: 300,
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
    backgroundColor: "#0002",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
