import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@rneui/themed';
import { theme } from '@theme/index';
import TrpcApp from '@app-trpc/TrpcApp';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoadFonts from '@theme/LoadFonts';

import { gestureHandlerRootHOC } from "react-native-gesture-handler"
import Navigation from './navigation';

function App() {

  return (
    <LoadFonts>
      <NavigationContainer>
        <SafeAreaProvider>
          <ThemeProvider
            theme={theme}
          >
            <TrpcApp>
              <Navigation/>
            </TrpcApp>
          </ThemeProvider>
        </SafeAreaProvider>
      </NavigationContainer>
    </LoadFonts>
  );
}

export default gestureHandlerRootHOC(App);