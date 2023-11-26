import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MyDrawer from "./src/navigation/Drawer";
import { SafeAreaProvider , SafeAreaView } from 'react-native-safe-area-context';


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
     <SafeAreaProvider style={{height:SafeAreaView.setStatusBarHeight}} forceInset={{ bottom: 'never' }}>
      <StatusBar backgroundColor='#000' style='light' />
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <MyDrawer />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
