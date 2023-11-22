import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNav from './Stack';
import Categories from '../screens/Categories';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyDrawer from './Drawer';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="StackNav" component={StackNav} />
            <Tab.Screen name="MyDrawer" component={MyDrawer} />
        </Tab.Navigator>
    );
}

export default BottomTab;
