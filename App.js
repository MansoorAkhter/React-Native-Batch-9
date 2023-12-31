import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MyDrawer from "./src/navigation/Drawer";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      accent: 'yellow',
    },
  };

  return (
    // <SafeAreaProvider style={{ height: SafeAreaView.setStatusBarHeight }} forceInset={{ bottom: 'never' }}>
    <SafeAreaView style={{flex:1}}>

      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar backgroundColor='#000' style='light' />
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <MyDrawer />
          </NavigationContainer>
        </PaperProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
    // </SafeAreaProvider>
  );
}
