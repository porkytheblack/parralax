import { View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootParamList } from 'navigation/types'
import { makeStyles, SocialIcon, Text } from '@rneui/themed'
import { getAuth, onAuthStateChanged, signInWithCredential } from 'firebase/auth'
import app, { auth } from '@app-firebase/index'
import { maybeCompleteAuthSession } from 'expo-web-browser'
import useAuth from '@hooks/useAuth'
import { isEmpty } from 'lodash'

type Props = NativeStackScreenProps<RootParamList, "Auth"> 

maybeCompleteAuthSession()

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
  
  onAuthStateChanged(auth, (user)=>{
    if(!isEmpty(user)){
      props.navigation.navigate("Bunny")
    }
  })

  const { feedback, promptAsync } = useAuth()
  return (
    <View  style={container} >
      <SocialIcon
        type='github'
        style={loginIcon}
        iconSize={50}
        onPress={()=>promptAsync()}
      />
      <Text weight='semibold' style={text}  >Only One way in!</Text>
    </View>
  )
}

export default Auth
