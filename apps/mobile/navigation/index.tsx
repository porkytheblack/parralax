import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootParamList } from './types'
import Splash from '@screens/splash'
import Auth from '@screens/auth'
import Bunny from '@screens/bunny'


const RootNavigator = createNativeStackNavigator<RootParamList>()

const Navigation = () => {
  return (
    <RootNavigator.Navigator 
      initialRouteName='Splash' 
      screenOptions={{
        headerShown: false,
        navigationBarColor: 'white'
      }}
      >
      <RootNavigator.Screen name="Splash" component={Splash}  />
      <RootNavigator.Screen name="Auth" component={Auth}  />
      <RootNavigator.Screen name="Bunny" component={Bunny}  />
    </RootNavigator.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({})