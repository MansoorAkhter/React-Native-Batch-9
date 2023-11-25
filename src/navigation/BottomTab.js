import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNav from './Stack';
import Categories from '../screens/Categories';
import MyDrawer from './Drawer';
import Article from '../screens/Article';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Account from '../screens/Account';
import TopTap from './TopTap';


const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: true, tabBarShowLabel: false, }}>
            <Tab.Screen name="StackNav" component={StackNav} options={{
                tabBarIcon: ({ focused }) => (
                    <FontAwesome5
                        name="home"
                        size={24}
                        style={{ color: focused ? 'purple' : 'grey' }}
                    />
                )
            }} />
            <Tab.Screen name="Article" component={Article} options={{
                tabBarIcon: ({ focused }) => (
                    <FontAwesome5
                        name="camera"
                        size={24}
                        style={{ color: focused ? 'purple' : 'grey' }}
                    />
                )
            }} />
            <Tab.Screen name="TopTap" component={TopTap} options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons name="chatbubble-ellipses" size={28}
                        style={{ color: focused ? 'purple' : 'grey' }} />
                )
            }} />
            <Tab.Screen name="Account" component={Account} options={{
                tabBarIcon: ({ focused }) => (
                    <MaterialIcons name="account-circle" size={30} style={{ color: focused ? 'purple' : 'grey' }} />
                )
            }} />
        </Tab.Navigator>
    );
}

export default BottomTab;

