import { StyleSheet, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootParamList } from 'navigation/types'
import { Image, makeStyles, Text } from '@rneui/themed'
import HeroIllustration from "../../../assets/illustrations/workfromhome.svg"
import RoundedButton from '@components/atoms/RoundedButton'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import app, { auth } from '@app-firebase/index'
import { isEmpty } from 'lodash'

type Props = NativeStackScreenProps<RootParamList, "Splash">


const useStyles = makeStyles((theme)=>{
  return {
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
      paddingHorizontal: 24,
      paddingVertical: 100,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    heroTextSection: {
      width: "100%",
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    heroText: {
      fontSize: 36,
      textAlign: 'left',
    },
    imageSection: {
      width: "100%",
      alignItems: 'center',
      justifyContent: 'center',

    },
    bottomSection: {
      width: "100%",
      alignItems: 'center',
      justifyContent: 'center',
    }
  }
})

const Splash = (props: Props) => {
  const styles = useStyles()

  const goToLogin = () => {
    props.navigation.navigate("Auth")
  }

  onAuthStateChanged(auth, (user)=>{
    if(!isEmpty(user)){
      props.navigation.navigate("Bunny")
    }
  })

  return (
    <View
      style={styles.container}
    >
      <View style={styles.heroTextSection}>
        <Text style={styles.heroText} weight='semibold'  >
          Tired of Coding all week?
        </Text>
        <Text style={[styles.heroText, {fontSize: 24}]} weight='medium'  >
          You are not alone.
        </Text>
      </View>
      <View style={styles.imageSection} >
        <HeroIllustration 
          width={400} 
          height={400} 
        />
      </View>
      <View style={styles.bottomSection} >
        <RoundedButton onPress={goToLogin} >
          Join the Community
        </RoundedButton>
      </View>
    </View>
  )
}

export default Splash
