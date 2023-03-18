import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { makeStyles } from '@rneui/themed'

type Props= {
    me?: boolean,
    message?: string,
    time?: string,
}

const useStyles = makeStyles((theme, props: Props)=>{
    return {
        container: {
            alignItems: props.me ? "flex-end" : "flex-start",
        },
        message: {
            backgroundColor: props.me ? theme.colors.white : theme.colors.paler_blue,
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 15,
            borderWidth: props.me ? 2 : 0,
            borderColor: theme.colors.paler_blue,
        },
        messageText: {
            fontSize: 16,
            color: props.me ? theme.colors.message : theme.colors.white,
            textAlign: "left",
            lineHeight: 21,
            fontWeight:  '400'
        },
        timeContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: theme.colors.background_1,
            marginTop: 10,
            paddingVertical: 5,
            width: 100
        },
        timeText: {
            fontSize: 12,
            color: theme.colors.message,

        }
    }
})

const ChatBubble = (props: Props) => {
    const styles = useStyles(props)
  return (
    <View style={styles.container} >
      <View style={styles.message} >
        <Text style={styles.messageText} >
            {props.message}
        </Text>
      </View>
      <View style={styles.timeContainer} >
        <Text style={styles.timeText} >
            {props.time}
        </Text>
      </View>
    </View>
  )
}

export default ChatBubble

const styles = StyleSheet.create({})