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
import { AntDesign } from '@expo/vector-icons';


const Home = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleAddToCart = () => console.log("Add to cart");
  // const handleNavigation = () => navigation.navigate("ProductDetail");

  console.log("Search Input: >>>>", searchInput);
  return (
    <View style={{ flex: 1, backgroundColor: "#eee", }}>
      <View style={{ zIndex: 999, marginTop: 25 }}>
        <SearchBar onChangeText={setSearchInput} />
      </View>

      <View style={{}}>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={{ paddingTop: 10, paddingBottom: 90, paddingHorizontal: 10 }}
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
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollWrpr: {
    backgroundColor: "#eee",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 40,
  },
});
