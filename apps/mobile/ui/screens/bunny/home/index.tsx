import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { BunnyScreenParamList } from 'navigation/types'
import { makeStyles } from '@rneui/themed'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = BottomTabScreenProps<BunnyScreenParamList, "Home">

const useStyles = makeStyles((theme)=>{
  return {
    container: {
      flex: 1,
      backgroundColor: theme.colors.white
    }
  }
})

const Home = ( props: Props ) => {
  const styles = useStyles()
  return (
    <SafeAreaView
      style={styles.container}
    >
        <Text>Home</Text>
    </SafeAreaView>
  )
}

export default Home
