import { View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootParamList } from 'navigation/types'
import { makeStyles, SocialIcon, Text } from '@rneui/themed'

type Props = NativeStackScreenProps<RootParamList, "Auth">

const useStyles = makeStyles((theme)=>{
  return {
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginIcon: {
      width: 100,
      height: 100,
      borderRadius: 50
    },
    text: {
      fontSize: 28,
    }
  }
})

const Auth = (props: Props) => {
  const { container, loginIcon, text } = useStyles()
  return (
    <View  style={container} >
      <SocialIcon
        type='github'
        style={loginIcon}
        iconSize={50}
      />
      <Text weight='semibold' style={text}  >Only One way in!</Text>
    </View>
  )
}

export default Auth
