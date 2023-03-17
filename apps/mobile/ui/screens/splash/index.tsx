import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootParamList } from 'navigation/types'
import { makeStyles } from '@rneui/themed'

type Props = NativeStackScreenProps<RootParamList, "Splash">


const useStyles = makeStyles((theme)=>{
  return {
    container: {
      flex: 1,
      backgroundColor: theme.colors.app_blue
    }
  }
})

const Splash = (props: Props) => {
  const styles = useStyles()

  return (
    <View
      style={styles.container}
    >

    </View>
  )
}

export default Splash
