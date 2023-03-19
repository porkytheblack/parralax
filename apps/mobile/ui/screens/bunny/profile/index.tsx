import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { BunnyScreenParamList } from 'navigation/types'
import { makeStyles } from '@rneui/themed'
import { SafeAreaView } from 'react-native-safe-area-context'
import RoundedButton from '@components/atoms/RoundedButton'
import useAuth from '@hooks/useAuth'
import { signOut } from 'firebase/auth'
import { auth } from '@app-firebase/index'

type Props = BottomTabScreenProps<BunnyScreenParamList, "Profile">

const useStyles = makeStyles((theme)=>{
  return {
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
      paddingHorizontal: 20,
      paddingVertical: 40,
    }
  }
})

const Profile = ( props: Props ) => {
  const styles = useStyles()

  return (
    <SafeAreaView style={styles.container} >
      <RoundedButton
        onPress={()=>{
          signOut(auth).then(()=>{

          }).catch((e)=>{
            console.log(e)
          })
        }}
      >
        Logout
      </RoundedButton>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})