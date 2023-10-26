import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { data } from "../../assets/dummyData";
import ProductCard from "../component/ProductCard";
import SearchBar from "../component/SearchBar";

const Home = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleAddToCart = () => console.log("Add to cart");
  // const handleNavigation = () => navigation.navigate("ProductDetail");

  console.log("Search Input: >>>>", searchInput);
  return (
    <View>
      <SearchBar onChangeText={setSearchInput} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{ alignItems: "center" }}
        renderItem={({ item, index }) => (
          <ProductCard
            key={index}
            img={item?.img}
            price={item?.price}
            productName={item?.name}
            handleAddToCart={handleAddToCart}
            handleNavigation={() =>
              navigation.navigate("ProductDetail", { data: item })
            }
          />
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  // scrollWrpr: {
  //   backgroundColor: "#eee",
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  //   justifyContent: "center",
  //   paddingTop: 20,
  //   paddingBottom: 40,
  // },
});
