import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BunnyScreenParamList, RootParamList } from 'navigation/types'
import { makeStyles, useTheme } from '@rneui/themed'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './home'
import Profile from './profile'
import Settings from './settings'
import Chat from './chat'
import { Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons'

type Props = NativeStackScreenProps<RootParamList, "Bunny">

const BottomNavigator = createBottomTabNavigator<BunnyScreenParamList>()

const Bunny = (props: Props) => {
    const theme = useTheme()
  return (
    <BottomNavigator.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30,
                paddingVertical: 10,
            },
            tabBarLabel: () => null,
            tabBarActiveTintColor: theme.theme.colors.app_blue,
            tabBarBackground: ()=>{
                return (
                    <View style={{
                        backgroundColor: theme.theme.colors.white,
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 100,
                        borderTopRightRadius: 30,
                        borderTopLeftRadius: 30,
                        elevation: 10,
                    }} />
                )
            }
        }}
    >
        <BottomNavigator.Screen 
            name="Home" 
            component={Home} 
            options={{
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
        <BottomNavigator.Screen 
            name="Chat" 
            component={Chat} 
            options={{
                tabBarIcon: ({focused}) =>{
                    return (
                        <Feather 
                            name="message-circle"
                            size={24}
                            color={
                                focused ? theme.theme.colors.app_blue : "black"
                            }
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