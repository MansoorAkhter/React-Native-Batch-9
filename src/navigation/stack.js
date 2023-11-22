import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetail from "../screens/ProductDetail";
import Home from "../screens/Home";
import TopTap from "./TopTap";

const Stack = createNativeStackNavigator();


const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{
      animation:"slide_from_right",
      headerShown:false
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="TopTap" component={TopTap} />
    </Stack.Navigator>
  );
};

export default StackNav;
