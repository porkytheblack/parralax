import {  View } from 'react-native'
import React from 'react'
import { makeStyles, Button, Text } from '@rneui/themed'

type Props = {
  onPress?: () => void
  children: React.ReactNode
}

const useStyles = makeStyles((theme)=>{
    return {
        container: {
          width: "100%",
          paddingVertical: 8,
          paddingHorizontal: 16,
          backgroundColor: theme.colors.app_blue,
          borderRadius: 20,
        },
    }
})

const RoundedButton = (props: Props) => {
  const { container } = useStyles()
  const { onPress, children } = props
  return (
    <Button
      style={container}
      onPress={onPress}
      buttonStyle={{
        backgroundColor: 'transparent',
      }}
    >
      <Text weight="medium" style={{
        color: 'white',
        fontSize: 20,
      }} >{children}</Text>
    </Button>
  )
}

export default RoundedButton
