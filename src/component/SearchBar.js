import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native";
import React from "react";
const { width } = Dimensions.get("window");

const SearchBar = ({ onChangeText }) => {
  return (
    <View
      style={{
        height: 55,
        width: width, elevation:5,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        flexDirection:"row",
        justifyContent: "center", alignItems: "center"
      }}
    >
      <TextInput
        placeholder="Search here..."
        onChangeText={onChangeText}
        placeholderTextColor="grey"
        style={{
          height: "70%",
          width: "90%",
          borderColor: "#000",
          backgroundColor:"#eee",
          color:"#000",
          borderRadius: 30,
          borderWidth: 1,
          paddingHorizontal: 20
        }}
      />


    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
