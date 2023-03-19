import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'
import { BunnyHomeScreenParamList, BunnyScreenParamList } from 'navigation/types'
import Home from '.'
import Chat from './screens/chat'
import ChatHeader from '@components/molecules/ChatHeader'

type Props = NativeStackScreenProps<BunnyScreenParamList, "Home">
const Stack = createNativeStackNavigator<BunnyHomeScreenParamList>()
const HomeScreen = (props: Props) => {
  return (
    <Stack.Navigator initialRouteName='BunnyHome' screenOptions={{
        headerShown: false
    }} >
        <Stack.Screen name="BunnyHome" component={Home}  />
        <Stack.Screen options={{
            headerShown: true,
            header: (props)=> {
                return (
                    <ChatHeader
                        {
                            ...props
                        }
                    />
                )
            }
        }} name="Chats" component={Chat} />
    </Stack.Navigator>
  )
}

export default HomeScreen