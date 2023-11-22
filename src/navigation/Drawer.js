import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from './BottomTab';
import Article from '../screens/Article';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator >
    <Drawer.Screen name="BottomTab" component={BottomTab} />
    <Drawer.Screen name="Article" component={Article} />
  </Drawer.Navigator>
  )
}

export default MyDrawer