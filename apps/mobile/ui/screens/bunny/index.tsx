import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BunnyScreenParamList, RootParamList } from 'navigation/types'
import { makeStyles, useTheme } from '@rneui/themed'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from './profile'
import Settings from './settings'
import { Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import HomeScreen from './home/navigator'
import navigationContext from '@navigation/context'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@app-firebase/index'
import { isEmpty } from 'lodash'

type Props = NativeStackScreenProps<RootParamList, "Bunny">

const BottomNavigator = createBottomTabNavigator<BunnyScreenParamList>()

const Bunny = (props: Props) => {
    const theme = useTheme()
    const { currentScreen } = useContext(navigationContext)

    onAuthStateChanged(auth, (user)=>{
        if(isEmpty(user)){
            props.navigation.navigate("Auth")
        }
    })

  return (
    <BottomNavigator.Navigator
        initialRouteName='Home'
        screenOptions={{
            tabBarStyle: {
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30,
                paddingVertical: 10,
                backgroundColor: theme.theme.colors.white,
                position: 'absolute',
                bottom: 0,
                display: currentScreen === "Chats" ? 'none' : 'flex'
            },
            tabBarLabel: () => null,
            tabBarActiveTintColor: theme.theme.colors.app_blue,
        }}
    >
        <BottomNavigator.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    return (
                        <FontAwesome
                            name={focused ? "circle" :"circle-o"}
                            size={24}
                            color={focused ? theme.theme.colors.app_blue : "black"}

                        />
                    )
                }
            }}
        />
        <BottomNavigator.Screen name="Profile" component={Profile}
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    return (
                        <FontAwesome5
                            name={"user-circle"}
                            size={24}
                            color={ focused ? theme.theme.colors.app_blue : "black"}
                        />
                    )
                }
            }}
        />
        <BottomNavigator.Screen name="Settings" component={Settings}
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    return (
                        <Feather 
                            name='settings'
                            size={24}
                            color={ focused ? theme.theme.colors.app_blue : "black" }
                        />
                    )
                }
            }}
        />
    </BottomNavigator.Navigator>
  )
}

export default Bunny

const styles = StyleSheet.create({})