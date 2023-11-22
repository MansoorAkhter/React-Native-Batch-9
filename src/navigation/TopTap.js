import { View, Text } from 'react-native'
import React from 'react'
import Reviews from '../screens/Reviews';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const TopTap = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name="Reviews" component={Reviews} />
        </Tab.Navigator>
    )
}

export default TopTap