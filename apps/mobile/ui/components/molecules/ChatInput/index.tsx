import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Input, makeStyles } from '@rneui/themed'
import { FontAwesome } from '@expo/vector-icons'

const useStyles = makeStyles((theme)=>{
    return {
        container: {
            width: "100%",
            backgroundColor: theme.colors.background_1,
            borderRadius: 15,
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20
        },
        chatContainer: {
            height: 40,
            width: "80%"
        },
        sendButton: {
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: theme.colors.app_blue,
            alignItems: "center",
            justifyContent: "center",
        }
    }
})

const ChatInput = () => {
    const styles = useStyles()
  return (
    <KeyboardAvoidingView style={styles.container} >
        <View style={styles.chatContainer} >
            <Input
                placeholder="What's on your mind?"
            />
        </View>
        
        <TouchableOpacity style={styles.sendButton}>
            <FontAwesome
                name="send"
                size={24}
                color="white"
            />
        </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default ChatInput

const styles = StyleSheet.create({})