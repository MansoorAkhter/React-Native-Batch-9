import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from './BottomTab';
import Article from '../screens/Article';
import Login from '../screens/Login';
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true, headerTitleAlign: "center" }}>
        <Drawer.Screen name="Home" component={BottomTab} options={{ headerTitle: "", headerTransparent: true }} />
        <Drawer.Screen name="Article" component={Article} />
        <Drawer.Screen name="Login/Signup" component={Login} options={{ headerTitle: "" }} />
    </Drawer.Navigator>
  )
}

export default MyDrawer