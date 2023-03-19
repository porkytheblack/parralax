import { Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import NavigationBar from 'expo-navigation-bar'

if(Platform.OS === "android") {
    NavigationBar?.setBackgroundColorAsync("white").then(()=>{
        console.log("set background color")
    }).catch((e)=>{
        console.log("error setting background color", e)
    })
}

interface Props {
    children: React.ReactNode
}

const AppStatusBar = (props: Props) => {
  return (
    <>
        <StatusBar   animated />
        {props.children}
    </>
  )
}

export default AppStatusBar

const styles = StyleSheet.create({})