import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { BunnyScreenParamList } from 'navigation/types'

type Props = BottomTabScreenProps<BunnyScreenParamList, "Settings">

const Settings = (props: Props) => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({})