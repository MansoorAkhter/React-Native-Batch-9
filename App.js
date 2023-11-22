import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyDrawer from "./src/navigation/Drawer";
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
  <SafeAreaProvider>
    <NavigationContainer>
     <MyDrawer/>
    </NavigationContainer>
  </SafeAreaProvider>
  );
}
