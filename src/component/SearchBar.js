import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native";
import React from "react";
const { width } = Dimensions.get("window");
const SearchBar = ({ onChangeText }) => {
  return (
    <View
      style={{
        height: 55,
        width: width,
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        marginBottom:20
      }}
    >
      <TextInput
        placeholder="Search here..."
        onChangeText={onChangeText}
        placeholderTextColor="#000"
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#eee",
          borderRadius:30,
          borderColor:"#bbb", borderWidth:1,
          paddingHorizontal:10
        }}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
