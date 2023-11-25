import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MyDrawer from "./src/navigation/Drawer";
import { SafeAreaProvider } from 'react-native-safe-area-context';


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
    <SafeAreaProvider >
      <StatusBar backgroundColor='#000' style='light' />
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <MyDrawer />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
