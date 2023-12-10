import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNav from './StackNav';
import Categories from '../screens/Categories';
import MyDrawer from './Drawer';
import Article from '../screens/Article';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Account from '../screens/Account';
import TopTap from './TopTap';
import Gallery from '../screens/Camera';


const Tab = createBottomTabNavigator();

const BottomTab = ({navigation}) => {
    return (
        <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerTitleAlign:"center" }}>
            <Tab.Screen name="StackNav" component={StackNav} options={{
                headerShown:false,
                tabBarIcon: ({ focused }) => (
                    <FontAwesome5
                        name="home"
                        size={24}
                        style={{ color: focused ? 'purple' : 'grey' }}
                    />
                )
            }} />
            <Tab.Screen name="Gallery" component={Gallery} options={{
                tabBarIcon: ({ focused }) => (
                    <FontAwesome5
                        name="camera"
                        size={24}
                        style={{ color: focused ? 'purple' : 'grey' }}
                    />
                )
            }} />
            <Tab.Screen name="Messages" component={TopTap} options={{
                tabBarIcon: ({ focused }) => (
                    <Ionicons name="chatbubble-ellipses" size={28}
                        style={{ color: focused ? 'purple' : 'grey' }} />
                )
            }} />
            <Tab.Screen name="Drawer" component={MyDrawer} options={{
                tabBarIcon: ({ focused }) => {
                    return(
                    <Entypo onPress={() => {navigation.openDrawer()}} name="menu" size={30} style={{ color: focused ? 'purple' : 'grey' }} />
                )}
            }} />
        </Tab.Navigator>
    );
}

export default BottomTab;

