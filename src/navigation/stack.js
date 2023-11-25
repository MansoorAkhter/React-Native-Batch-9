import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetail from "../screens/ProductDetail";
import Home from "../screens/Home";
import TopTap from "./TopTap";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const Stack = createNativeStackNavigator();


const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{
      animation:"slide_from_right",
      headerShown:false
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="TopTap" component={TopTap} />
    </Stack.Navigator>
  );
};

export default StackNav;
