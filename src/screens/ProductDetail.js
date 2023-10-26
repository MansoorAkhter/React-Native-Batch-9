import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const ProductDetail = ({ route, navigation }) => {
  console.log(route.params.data, "=================");
  const data = route?.params?.data;

  return (
    <View style={styles.main}>
      <Button title="Go back" onPress={() => navigation.goBack()} />

      <Text style={{ color: "#000", fontSize: 20 }}>{data?.name}</Text>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
