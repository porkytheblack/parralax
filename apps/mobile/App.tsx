import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { ThemeProvider } from '@rneui/themed';
import { theme } from '@theme/index';
import TrpcApp from '@app-trpc/TrpcApp';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoadFonts from '@theme/LoadFonts';

import { gestureHandlerRootHOC } from "react-native-gesture-handler"
import Navigation from './navigation';
import AppStatusBar from '@theme/AppStatusBar';
import { getDefaultReturnUrl, getRedirectUrl } from 'expo-auth-session';
import { useRef, useState } from 'react';
import navigationContext from './navigation/context';

function App() {
  const [currentScreen, setCurrentScreen] = useState<string>("Splash")
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<any>()

  const onReadyHandler = () => {
    routeNameRef.current = navigationRef.getCurrentRoute()?.name
  }

  const onStateChangeHandler = async () => {
    const previousRouteName = routeNameRef.current
    const currentRouteName = navigationRef.getCurrentRoute()?.name

    if (previousRouteName !== currentRouteName) {
      currentRouteName && setCurrentScreen(currentRouteName)
    }

    routeNameRef.current = currentRouteName
  }

  return (
    <navigationContext.Provider
      value={{
        currentScreen,
        setCurrentScreen
      }}
    >
    <LoadFonts>
      <AppStatusBar>
      <NavigationContainer
        onReady={onReadyHandler}
        onStateChange={onStateChangeHandler} 
        ref={navigationRef} 
      >
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
      </AppStatusBar>
    </LoadFonts>
    </navigationContext.Provider>
  );
}

export default gestureHandlerRootHOC(App);