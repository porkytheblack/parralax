import { Text, View } from 'react-native'
import React, { ReactElement } from 'react'
import { useFonts } from 'expo-font'
import { Nunito_200ExtraLight, Nunito_300Light, Nunito_400Regular, Nunito_500Medium, Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold, Nunito_900Black } from '@expo-google-fonts/nunito'


type Props = {
    children: ReactElement
}

const LoadFonts = (props: Props) => {
    const { children } = props
    const [fontsLoaded] = useFonts({
        Nunito_200ExtraLight, 
        Nunito_300Light, 
        Nunito_400Regular, 
        Nunito_500Medium, 
        Nunito_600SemiBold, 
        Nunito_700Bold, 
        Nunito_800ExtraBold, 
        Nunito_900Black
    })

    if (!fontsLoaded) {
        return null
    }

  return (
    children
  )
}

export default LoadFonts

