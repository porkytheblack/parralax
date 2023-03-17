import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { BunnyScreenParamList } from 'navigation/types'

type Props = BottomTabScreenProps<BunnyScreenParamList, "Profile">

const Profile = ( props: Props ) => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})